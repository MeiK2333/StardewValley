import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSavesStore = defineStore("saves", () => {
  const name = ref<string | null>(null);
  const tree = ref<Element | null>(null);

  const _querySelector: { [key: string]: Element | null | undefined } = {};
  const querySelector = (selector: string) => {
    if (!_querySelector[selector]) {
      _querySelector[selector] = tree.value?.querySelector(selector);
    }
    return _querySelector[selector];
  };
  const _querySelectorAll: any = {};
  const querySelectorAll = (selector: string) => {
    if (!_querySelectorAll[selector]) {
      _querySelectorAll[selector] = tree.value?.querySelectorAll(selector);
    }
    return _querySelectorAll[selector] as Array<Element>;
  };

  return { name, tree, querySelector, querySelectorAll };
});
