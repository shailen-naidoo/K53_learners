import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("./views/Dashboard.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/courses",
      name: "Courses",
      component: () => import("./views/Courses.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/exams",
      name: "Exams",
      component: () => import("./views/Exams.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("./views/Account.vue"),
      meta: { requiresAuth: true }
    }
  ]
});
