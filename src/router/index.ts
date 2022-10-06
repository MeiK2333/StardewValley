import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useSavesStore } from "../stores/saves";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: () => import("../views/Inventory.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/Skills.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      component: () => import("../components/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useSavesStore();
  if (store.name === null && to.name !== "home") {
    console.log("尚未读取存档文件！");
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
