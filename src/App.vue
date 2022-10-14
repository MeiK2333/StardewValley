<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
import ContextMenu from "./components/ContextMenu.vue";
import { downloadXmlFile } from "./utils";

const store = useSavesStore();
//@ts-ignore
window.globalThis.store = store;
// 禁用选择以防止选中污染样式
document.onselectstart = () => {
  return false;
};
document.oncontextmenu = (event) => {
  event.preventDefault();
};

const downloadSaves = () => {
  if (store.tree && store.name) {
    downloadXmlFile(store.tree, store.name);
  }
};
</script>

<template>
  <div class="main sv-border sv-gradient">
    <div class="menu" v-if="store.name">
      <ul class="menu-ul">
        <RouterLink :to="{ name: 'inventory' }">
          <li class="menu-li sv-border sv-gradient">物品</li>
        </RouterLink>
        <RouterLink :to="{ name: 'skills' }">
          <li class="menu-li sv-border sv-gradient">技能</li>
        </RouterLink>
        <RouterLink :to="{ name: 'friendship' }">
          <li class="menu-li sv-border sv-gradient">好感</li>
        </RouterLink>
        <a style="margin-left: auto">
          <li class="menu-li sv-border sv-gradient" @click="downloadSaves">
            下载存档
          </li>
        </a>
      </ul>
    </div>
    <RouterView />
  </div>
  <ContextMenu></ContextMenu>
</template>

<style scoped>
.main {
  height: 600px;
  width: 860px;
  min-width: 860px;
  cursor: url("@/assets/cursor.png") 0 0, auto;
  overflow: auto;
}
.menu {
  transform: translateY(-48px);
  position: absolute;
  width: 860px;
}
.menu-ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.menu-li {
  display: unset;
  margin: 0 4px;
}
.router-link-active {
  transform: translateY(8px);
}
</style>
