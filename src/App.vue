<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";

const store = useSavesStore();
// 禁用选择以防止选中污染样式
document.onselectstart = () => {
  return false;
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
      </ul>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  height: 600px;
  width: 860px;
  min-width: 860px;
  cursor: url("@/assets/cursor.png") 0 0, auto;
}
.menu {
  transform: translateY(-48px);
  position: absolute;
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
