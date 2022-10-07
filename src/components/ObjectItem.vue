<script setup lang="ts">
import { useContextMenuStore } from "@/stores/contextmenu";

const store = useContextMenuStore();
defineProps(["object"]);
const contextmenu = (event: Event, object: Element) => {
  store.options = [
    {
      title: "修改库存",
      onClick: (event) => {
        console.log(object);
        console.log("修改库存");
      },
    },
    {
      title: "移除物品",
      onClick: (event) => {
        console.log(object);
        console.log("移除物品");
      },
    },
  ];
  event.preventDefault();
};
</script>

<template>
  <div
    v-if="!object || object.getAttribute('xsi:nil')"
    class="object object-nil"
  ></div>
  <div v-else class="object" @contextmenu="contextmenu($event, object)">
    {{ object.querySelector("DisplayName")?.textContent }}
    <div class="object-stack">
      {{ object.querySelector("Stack")?.textContent }}
    </div>
  </div>
</template>

<style scoped>
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
</style>
