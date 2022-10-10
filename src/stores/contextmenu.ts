import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ContextMenuItem } from "@/struct";

export const useContextMenuStore = defineStore("contextmenu", () => {
  const options = ref<Array<ContextMenuItem>>([]);

  const pageKey = ref({
    objects: 0,
    money: 0,
    skills: 0,
  });
  return { options, pageKey };
});
