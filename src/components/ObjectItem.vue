<script setup lang="ts">
import { useContextMenuStore } from "@/stores/contextmenu";
import { useSavesStore } from "@/stores/saves";
import { createXmlElement } from "@/utils";

const store = useContextMenuStore();
const emit = defineEmits(["stackChange"]);
defineProps(["object"]);
const contextmenu = (event: Event, object: Element) => {
  const savesStore = useSavesStore();
  store.options = [];
  const stackable = object.querySelector("stackable")?.textContent;
  // 可修改库存
  if (stackable !== "false") {
    store.options.push({
      title: "修改库存",
      onClick: (event) => {
        emit("stackChange");
      },
    });
    store.options.push({
      title: "移除物品",
      onClick: (event) => {
        const nil = createXmlElement(`<Item xsi:nil="true"/>`);
        savesStore.tree
          ?.querySelector("player items")
          ?.replaceChild(nil, object);
        store.pageKey.objects++;
      },
    });
  }
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
