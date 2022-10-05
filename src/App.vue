<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const menu = ref({
  show: false,
  left: 0,
  top: 0,
});

oncontextmenu = (event) => {
  event.preventDefault();
  menu.value.show = true;
  menu.value.top = event.clientY;
  menu.value.left = event.clientX;
};
window.onclick = (event) => {
  event.preventDefault();
  menu.value.show = false;
};
</script>

<template>
  <div class="sv-main sv-border sv-gradient">
    <RouterView />
  </div>
  <div
    class="menu sv-border sv-gradient"
    :style="{
      left: `${menu.left}px`,
      top: `${menu.top}px`,
      display: menu.show ? 'block' : 'none',
    }"
  >
    右键菜单
  </div>
</template>

<style scoped>
.menu {
  display: none;
  background-color: #fff;
  position: absolute;
}
.sv-main {
  height: 600px;
  width: 860px;
  min-width: 860px;
}
</style>
