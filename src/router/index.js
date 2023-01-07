import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/MovieLists"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
