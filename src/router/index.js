import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/layout.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Layout",
    component: Layout
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;