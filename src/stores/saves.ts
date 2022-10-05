import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSavesStore = defineStore("saves", () => {
  const name = ref<string | null>(null);
  const tree = ref<Document | null>(null);

  return { name, tree };
});
