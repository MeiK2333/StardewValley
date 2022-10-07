import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ContextMenuItem } from "@/struct";

export const useContextMenuStore = defineStore("contextmenu", () => {
  const options = ref<Array<ContextMenuItem>>([]);
  return { options };
});
