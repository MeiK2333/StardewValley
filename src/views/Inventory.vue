<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
import { downloadXmlFile } from "@/utils";
import ObjectItem from "@/components/ObjectItem.vue";
import { useContextMenuStore } from "@/stores/contextmenu";

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
        console.log("修改持有现金");
      },
    },
  ];
  event.preventDefault();
};
</script>

<template>
  <div class="objects">
    <template
      v-for="(item, idx) in tree?.querySelectorAll('player items Item')"
      :key="'' + contextMenuStore.pageKey.objects + idx"
    >
      <ObjectItem :object="item"></ObjectItem>
    </template>
  </div>
  <div class="split"></div>
  <div class="detail">
    <div class="money" @contextmenu="moneyContextmenu($event)">
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
  width: 320px;
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
