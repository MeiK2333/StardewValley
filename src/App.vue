<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";

const store = useSavesStore();
// 禁用选择以防止选中污染样式
document.onselectstart = () => {
  return false;
};
</script>

<template>
  <div class="sv-main sv-border sv-gradient">
    <div class="sv-menu" v-if="store.name">
      <ul>
        <RouterLink :to="{ name: 'inventory' }"><li>物品栏</li></RouterLink>
        <RouterLink :to="{ name: 'skills' }"><li>技能</li></RouterLink>
      </ul>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.sv-main {
  height: 600px;
  width: 860px;
  min-width: 860px;
  cursor: url("@/assets/cursor.png") 0 0, auto;
}
</style>
