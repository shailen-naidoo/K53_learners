import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("./components/Dashboard.vue")
    },
    {
      path: "/courses",
      name: "Courses",
      component: () => import("./components/Courses.vue")
    },
    {
      path: "/exams",
      name: "Exams",
      component: () => import("./components/Exams.vue"),
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("./components/Account.vue")
    }
  ]
});
