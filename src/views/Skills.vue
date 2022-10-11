<script setup lang="ts">
import { useContextMenuStore } from "@/stores/contextmenu";
import { useSavesStore } from "@/stores/saves";
import { createXmlElement } from "@/utils";
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
const professionSetFunc = () => {
  const professionSet: Set<Number> = new Set();
  const professions = store.tree!.querySelectorAll("player professions int");
  professions.forEach((value) => {
    professionSet.add(Number(value.textContent));
  });
  return professionSet;
};
const prof = (index: number) => {
  const resp = [];
  const professionSet = professionSetFunc();
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
  },
  {
    title: "钓鱼",
    exp: experiencePoints[1],
    level: store.tree!.querySelector("player fishingLevel")!,
  },
  {
    title: "采集",
    exp: experiencePoints[2],
    level: store.tree!.querySelector("player foragingLevel")!,
  },
  {
    title: "采矿",
    exp: experiencePoints[3],
    level: store.tree!.querySelector("player miningLevel")!,
  },
  {
    title: "战斗",
    exp: experiencePoints[4],
    level: store.tree!.querySelector("player combatLevel")!,
  },
  {
    title: "幸运",
    exp: experiencePoints[5],
    level: store.tree!.querySelector("player luckLevel")!,
  },
];

const clearProf = (index: number, level: number = 5) => {
  const left = level === 5 ? index * 6 : index * 6 + 2;
  for (let i = left; i < index * 6 + 6; i++) {
    for (const item of store.tree!.querySelectorAll("player professions int")) {
      if (item.textContent!.trim() === i.toString()) {
        store.tree?.querySelector("player professions")?.removeChild(item);
      }
    }
  }
  contextStore.pageKey.skills++;
};

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

            // 顺便把专精清空了
            clearProf(index);

            contextStore.pageKey.skills++;
            skillsChangeShow.value = false;
          },
        });
      },
    },
  ];
};

const profContextmenu = (index: number, level: number) => {
  if (level === 5) {
    contextStore.options = [
      {
        title: professionName[index * 6],
        onClick: () => {
          clearProf(index);
          store
            .tree!.querySelector("player professions")!
            .appendChild(createXmlElement(`<int>${index * 6}</int>`));
          contextStore.pageKey.skills++;
        },
      },
      {
        title: professionName[index * 6 + 1],
        onClick: () => {
          clearProf(index);
          store
            .tree!.querySelector("player professions")!
            .appendChild(createXmlElement(`<int>${index * 6 + 1}</int>`));
          contextStore.pageKey.skills++;
        },
      },
    ];
  } else {
    const level5 = professionName.indexOf(prof(index)[0]);
    const target = index * 6 + (level5 - index * 6) * 2 + 2;
    contextStore.options = [
      {
        title: professionName[target],
        onClick: () => {
          clearProf(index, 10);
          store
            .tree!.querySelector("player professions")!
            .appendChild(createXmlElement(`<int>${target}</int>`));
          contextStore.pageKey.skills++;
        },
      },
      {
        title: professionName[target + 1],
        onClick: () => {
          clearProf(index, 10);
          store
            .tree!.querySelector("player professions")!
            .appendChild(createXmlElement(`<int>${target + 1}</int>`));
          contextStore.pageKey.skills++;
        },
      },
    ];
  }
};

const profName = (index: number, level: number) => {
  const professionSet = professionSetFunc();
  const left = level === 5 ? index * 6 : index * 6 + 2;
  const right = level === 5 ? index * 6 + 2 : index * 6 + 6;
  for (let i = left; i < right; i++) {
    if (professionSet.has(i)) {
      return professionName[i];
    }
  }
  return "待学习";
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
          <td
            v-if="Number(item.level.textContent) >= 5 && idx < 5"
            @contextmenu="profContextmenu(idx, 5)"
          >
            {{ profName(idx, 5) }}
          </td>
          <td
            v-if="
              Number(item.level.textContent) >= 10 &&
              idx < 5 &&
              profName(idx, 5) !== '待学习'
            "
            @contextmenu="profContextmenu(idx, 10)"
          >
            {{ profName(idx, 10) }}
          </td>
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
