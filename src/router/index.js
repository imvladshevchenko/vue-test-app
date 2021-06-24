import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/post-page",
    name: "PostPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PostPage.vue"),
  },
  {
    path: "/new-post",
    name: "NewPost",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/NewPost.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
