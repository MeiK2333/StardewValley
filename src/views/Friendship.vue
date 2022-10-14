<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
import { useVillagersStore } from "@/stores/villagers";
import HeartFill from "../components/heart-fill.vue";
import HeartGrey from "../components/heart/heart-grey.vue";
import HeartFillGrey from "../components/heart/heart-fill-grey.vue";
import { useContextMenuStore } from "@/stores/contextmenu";

const savesStore = useSavesStore();
const villagersStore = useVillagersStore();
const contextStore = useContextMenuStore();

const heartContextmenu = (name: string, level: number) => {
  contextStore.options = [
    {
      title: "设置好感",
      onClick: () => {
        const items = savesStore.tree!.querySelectorAll(
          "player friendshipData item"
        );
        for (const item of items) {
          if (item.querySelector("key string")!.textContent === name) {
            item.querySelector("value Friendship Points")!.textContent = (
              level * 250
            ).toString();
          }
        }
        contextStore.pageKey.friendship++;
      },
    },
  ];
};
</script>

<template>
  <div class="fs-main">
    <table>
      <tbody>
        <tr
          v-for="(item, i) in savesStore.tree!.querySelectorAll('player friendshipData item')"
          :key="`${i}-${contextStore.pageKey.friendship}`"
        >
          <td>
            {{
              villagersStore.name(
                item.querySelector("key string")!.textContent!
              )
            }}
          </td>
          <td>
            <template v-for="idx in [...Array(10).keys()]">
              <HeartFillGrey
                class="heart heart-disable"
                v-if="villagersStore.marryable(item.querySelector('key string')!.textContent!) && idx >= 8"
              ></HeartFillGrey>
              <HeartFill
                class="heart"
                @contextmenu="
                  heartContextmenu(
                    item.querySelector('key string')!.textContent!,
                    idx + 1
                  )
                "
                v-else-if="Number(item.querySelector('value Friendship Points')!.textContent) >= idx * 250 + 250"
              ></HeartFill>
              <HeartGrey
                class="heart"
                v-else
                @contextmenu="
                  heartContextmenu(
                    item.querySelector('key string')!.textContent!,
                    idx + 1
                  )
                "
              ></HeartGrey>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
  height: 40px;
  display: flex;
  align-items: center;
}
.fs-main {
  display: flex;
  justify-content: center;
}
tr:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.heart:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.heart-disable:hover {
  background-color: unset;
}
tr > td:first-child {
  margin-top: 12px;
}
tr > td:last-child {
  margin-bottom: 12px;
}
</style>
