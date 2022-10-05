<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
import { ref } from "vue";
import { loadXmlFile } from "@/utils";
import { useRouter } from "vue-router";

const saves = useSavesStore();
const router = useRouter();
const input = ref<HTMLInputElement | null>(null);
const clickBtn = () => {
  const elem = input.value;
  elem!.click();
};
const loadSave = async () => {
  const elem = input.value;
  const file = elem!.files!.item(0)!;
  const tree = await loadXmlFile(file);

  saves.$patch({ name: file.name, tree });
  router.push({ name: "inventory" });
};
</script>

<template>
  <div class="sv-center">
    <div style="width: 100%; margin: 20px">
      <p>
        请使用以您的农民姓名（或农场名称）和 ID 号命名的完整存档文件（例如<code
          class="saves-path"
          >张三_1008611</code
        >）；不要使用 SaveGameInfo 文件，因为它不包含所有必要的信息。
      </p>
      <p>默认存档文件位置为：</p>
      <ul>
        <li>
          Windows:
          <code class="saves-path">%AppData%\StardewValley\Saves\</code>
        </li>
        <li>
          Mac OSX & Linux:
          <code class="saves-path">~/.config/StardewValley/Saves/</code>
        </li>
      </ul>
    </div>
    <button class="sv-button load-btn" @click="clickBtn">读取存档</button>
  </div>
  <input type="file" ref="input" style="display: none" @change="loadSave" />
</template>

<style scoped>
.load-btn {
  height: 120px;
  width: 210px;
  font-size: 24px;
}
.sv-center {
  align-items: unset;
  height: unset;
}
.saves-path {
  font-weight: bold;
  font-size: 16px;
}
</style>
