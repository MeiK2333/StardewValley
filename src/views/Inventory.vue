<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
import { downloadXmlFile } from "@/utils";
const store = useSavesStore();

const contextmenu = (event: Event, object: Element) => {
  console.log(object);
  event.preventDefault();
};

const downloadSaves = () => {
  if (store.tree && store.name) {
    downloadXmlFile(store.tree, store.name);
  }
};
</script>

<template>
  <div class="objects">
    <template
      v-for="(item, idx) in store.querySelectorAll('player items Item')"
    >
      <div v-if="item.getAttribute('xsi:nil')" class="object object-nil"></div>
      <div v-else class="object" @contextmenu="contextmenu($event, item)">
        {{ item.querySelector("DisplayName")?.textContent }}
        <div class="object-stack">
          {{ item.querySelector("Stack")?.textContent }}
        </div>
      </div>
    </template>
  </div>
  <div class="split"></div>
  <div class="detail">
    <div class="dress">
      <div class="object">
        {{ store.querySelector("player leftRing DisplayName")?.textContent }}
      </div>
      <div class="object">
        {{ store.querySelector("player hat DisplayName")?.textContent }}
      </div>
      <div class="object">
        {{ store.querySelector("player rightRing DisplayName")?.textContent }}
      </div>
      <div class="object">
        {{ store.querySelector("player shirtItem DisplayName")?.textContent }}
      </div>
      <div class="object">
        {{ store.querySelector("player boots DisplayName")?.textContent }}
      </div>
      <div class="object">
        {{ store.querySelector("player pantsItem DisplayName")?.textContent }}
      </div>
      <div class="username">
        {{ store.querySelector("player name")?.textContent }}
      </div>
    </div>

    <div class="money">
      <div>{{ store.querySelector("player farmName")?.textContent }} 农场</div>
      <div>
        目前持有现金： {{ store.querySelector("player money")?.textContent }} 金
      </div>
      <div>
        总收入：
        {{ store.querySelector("player totalMoneyEarned")?.textContent }} 金
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
.object {
  width: 60px;
  height: 60px;
  border-right: 4px outset rgb(214, 143, 84);
  border-top: 4px outset rgb(214, 143, 84);
  border-left: 4px outset rgb(255, 228, 161);
  border-bottom: 4px outset rgb(255, 228, 161);
  margin: 2px 0;
  font-size: 12px;
  position: relative;
}
.object:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.object-nil {
  background-color: rgba(157, 124, 92, 0.3);
}
.object-stack {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 18px;
  font-weight: bold;
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
