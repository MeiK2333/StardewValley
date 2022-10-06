<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
const left = ref(0);
const top = ref(0);

oncontextmenu = (event) => {
  show.value = true;
  top.value = event.clientY;
  left.value = event.clientX;
  event.preventDefault();
};
window.onclick = () => {
  show.value = false;
};

const version = () => {
  console.log(`https://github.com/MeiK2333/StardewValley`);
};
</script>

<template>
  <div
    class="contextmenu sv-border"
    :style="{
      left: `${left}px`,
      top: `${top}px`,
      display: show ? 'block' : 'none',
    }"
  >
    <ul class="contextmenu-ul">
      <li class="contextmenu-li" @click="version">Stardew Valley v1.5.6</li>
    </ul>
  </div>
</template>

<style scoped>
.contextmenu {
  display: none;
  position: absolute;
  background-color: rgb(255, 210, 132);
  padding: 0;
}
.contextmenu-ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  background-color: rgb(68, 18, 28);
}
.contextmenu-li {
  display: unset;
  background-color: rgb(255, 210, 132);
  padding: 5px 10px;
  border: 2px solid rgb(133, 54, 5);
  margin: 3px 1px;
  outline: 2px solid rgb(255, 229, 186);
}
.contextmenu-li:hover {
  background-color: rgb(245, 183, 93);
  outline: 2px solid rgb(245, 199, 131);
}
</style>
