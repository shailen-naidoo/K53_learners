import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/app",
      name: "App",
      component: () => import("./views/App.vue")
    }
  ]
});
