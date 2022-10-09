<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
import { downloadXmlFile } from "@/utils";
import ObjectItem from "@/components/ObjectItem.vue";
import { useContextMenuStore } from "@/stores/contextmenu";
import { $vfm } from "vue-final-modal";
import { ref } from "vue";

const contextMenuStore = useContextMenuStore();
const store = useSavesStore();
const tree = store.tree;

const downloadSaves = () => {
  if (store.tree && store.name) {
    downloadXmlFile(store.tree, store.name);
  }
};
const moneyContextmenu = (event: Event) => {
  contextMenuStore.options = [
    {
      title: "修改持有现金",
      onClick: (event) => {
        moneyChange();
      },
    },
  ];
  event.preventDefault();
};

const stackChangeShow = ref(false);
const stackChange = (object: Element) => {
  const value = ref(Number(object.querySelector("Stack")?.textContent));
  $vfm.show("stack-change", {
    value,
    confirm: () => {
      if (value.value > 999) {
        value.value = 999;
      }
      if (value.value <= 0) {
        value.value = 1;
      }
      object.querySelector("Stack")!.textContent = value.value.toString();
      object.querySelector("stack")!.textContent = value.value.toString();
      contextMenuStore.pageKey.objects++;
      stackChangeShow.value = false;
    },
  });
};
const moneyChange = () => {
  const value = ref(Number(tree?.querySelector("player money")?.textContent));
  $vfm.show("stack-change", {
    value,
    confirm: () => {
      if (value.value <= 0) {
        value.value = 0;
      }
      if (value.value > 99999999) {
        value.value = 99999999;
      }
      const old = {
        money: Number(tree!.querySelector("player money")!.textContent),
        total: Number(
          tree!.querySelector("player totalMoneyEarned")!.textContent
        ),
      };
      tree!.querySelector("player money")!.textContent = value.value.toString();
      tree!.querySelector("player totalMoneyEarned")!.textContent = (
        old.total +
        (value.value - old.money)
      ).toString();
      contextMenuStore.pageKey.money++;
      stackChangeShow.value = false;
    },
  });
};
</script>

<template>
  <div class="objects">
    <template
      v-for="(item, idx) in tree?.querySelectorAll('player items Item')"
      :key="'' + contextMenuStore.pageKey.objects + idx"
    >
      <ObjectItem :object="item" @stack-change="stackChange(item)"></ObjectItem>
    </template>
    <vue-final-modal
      v-model="stackChangeShow"
      name="stack-change"
      :click-to-close="true"
      :esc-to-close="true"
      :ssr="false"
    >
      <template v-slot="{ params }">
        <input
          type="number"
          v-model="params.value"
          :min="1"
          :max="999"
          class="sv-input"
          style="width: 85%"
        />
        <button
          class="sv-button"
          @click="params.confirm"
          style="min-width: 68px; margin-right: 20px"
        >
          确定
        </button>
        <button
          class="sv-button"
          @click="stackChangeShow = false"
          style="min-width: 68px; margin-left: 20px"
        >
          取消
        </button>
      </template>
    </vue-final-modal>
  </div>
  <div class="split"></div>
  <div class="detail">
    <div
      class="money"
      @contextmenu="moneyContextmenu($event)"
      :key="contextMenuStore.pageKey.money"
    >
      <div>{{ tree?.querySelector("player farmName")?.textContent }} 农场</div>
      <div>
        目前持有现金： {{ tree?.querySelector("player money")?.textContent }} 金
      </div>
      <div>
        总收入：
        {{ tree?.querySelector("player totalMoneyEarned")?.textContent }} 金
      </div>
    </div>

    <div class="docs">
      <div style="width: 100%">鼠标右键点击物品以进行修改</div>
      <button class="sv-button" @click="downloadSaves">下载存档</button>
    </div>
  </div>
</template>

<style scoped>
.docs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  flex-wrap: wrap;
}

.objects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 48%;
}

.detail {
  color: rgb(34, 17, 34);
  display: flex;
  flex-wrap: wrap;
}

.dress {
  margin: 20px;
  width: 144px;
  display: flex;
  flex-wrap: wrap;
}

.money {
  width: 420px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
}

.money:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.money div {
  margin: 20px;
}

.split {
  width: calc(100% - 8px);
  height: 4px;
  background-color: rgb(250, 147, 5);
  border: 4px outset rgb(196, 122, 72);
}

.username {
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
</style>
