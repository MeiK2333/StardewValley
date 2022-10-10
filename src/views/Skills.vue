<script setup lang="ts">
import { useContextMenuStore } from "@/stores/contextmenu";
import { useSavesStore } from "@/stores/saves";
import { ref } from "vue";
import { $vfm } from "vue-final-modal";
const store = useSavesStore();
const contextStore = useContextMenuStore();

const points = [0, 100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];
const professionName = [
  "牧场主",
  "农场主",
  "鸡舍大师",
  "牧羊人",
  "制品生产家",
  "农业学家",
  "渔夫",
  "捕鱼者",
  "垂钓者",
  "海盗",
  "水手",
  "诱饵大师",
  "护林人",
  "收集者",
  "伐木工人",
  "萃取者",
  "植物学家",
  "追踪者",
  "矿工",
  "地质学家",
  "铁匠",
  "勘探者",
  "挖掘者",
  "宝石专家",
  "战士",
  "观察员",
  "暴击",
  "防御者",
  "特技者",
  "亡命徒",
];

const experiencePoints = store.tree!.querySelectorAll(
  "player experiencePoints int"
);
const professions = store.tree!.querySelectorAll("player professions int");
const professionSet: Set<Number> = new Set();
professions.forEach((value) => {
  professionSet.add(Number(value.textContent));
});
const prof = (index: number) => {
  const resp = [];
  for (let i = index * 6; i < index * 6 + 6; i++) {
    if (professionSet.has(i)) {
      resp.push(professionName[i]);
    }
  }
  return resp;
};
const skills = [
  {
    title: "耕种",
    exp: experiencePoints[0],
    level: store.tree!.querySelector("player farmingLevel")!,
    prof: prof(0),
  },
  {
    title: "钓鱼",
    exp: experiencePoints[1],
    level: store.tree!.querySelector("player fishingLevel")!,
    prof: prof(1),
  },
  {
    title: "采集",
    exp: experiencePoints[2],
    level: store.tree!.querySelector("player foragingLevel")!,
    prof: prof(2),
  },
  {
    title: "采矿",
    exp: experiencePoints[3],
    level: store.tree!.querySelector("player miningLevel")!,
    prof: prof(3),
  },
  {
    title: "战斗",
    exp: experiencePoints[4],
    level: store.tree!.querySelector("player combatLevel")!,
    prof: prof(4),
  },
  {
    title: "幸运",
    exp: experiencePoints[5],
    level: store.tree!.querySelector("player luckLevel")!,
    prof: [],
  },
];
console.log(skills);

const skillsChangeShow = ref(false);
const levelContextmenu = (index: number) => {
  contextStore.options = [
    {
      title: "修改技能等级",
      onClick: (event) => {
        const value = ref(Number(skills[index].level.textContent));
        $vfm.show("skills-change", {
          value,
          confirm: () => {
            if (value.value > 10) {
              value.value = 10;
            }
            if (value.value <= 0) {
              value.value = 0;
            }

            skills[index].level.textContent = value.value.toString();
            skills[index].exp.textContent = points[value.value].toString();

            contextStore.pageKey.skills++;
            skillsChangeShow.value = false;
          },
        });
      },
    },
  ];
};
</script>

<template>
  <div class="skills">
    <table>
      <thead>
        <tr>
          <th>技能</th>
          <th>等级</th>
          <th>经验</th>
          <th>5级专精</th>
          <th>10级专精</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) of skills"
          :key="`${idx}-${contextStore.pageKey.skills}`"
        >
          <td>{{ item.title }}</td>
          <td @contextmenu="levelContextmenu(idx)">
            {{ item.level.textContent }}
          </td>
          <td>{{ item.exp.textContent }}</td>
          <td v-for="n of item.prof">{{ n }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <vue-final-modal
    v-model="skillsChangeShow"
    name="skills-change"
    :click-to-close="true"
    :esc-to-close="true"
    :ssr="false"
  >
    <template v-slot="{ params }">
      <input
        type="number"
        v-model="params.value"
        :min="1"
        :max="999"
        class="sv-input"
        style="width: 85%"
      />
      <button
        class="sv-button"
        @click="params.confirm"
        style="min-width: 68px; margin-right: 20px"
      >
        确定
      </button>
      <button
        class="sv-button"
        @click="skillsChangeShow = false"
        style="min-width: 68px; margin-left: 20px"
      >
        取消
      </button>
    </template>
  </vue-final-modal>
</template>

<style scoped>
table {
  text-align: center;
}
td,
th {
  min-width: 160px;
  min-height: 80px;
  height: 80px;
}

td:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.skills {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
