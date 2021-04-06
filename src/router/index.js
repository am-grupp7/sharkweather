import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/StartPage.vue";

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/StartPage",
    name: "StartPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StartPage.vue"),
  },
  {
    path: "/topten",
    name: "TopTen",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TopTen.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
