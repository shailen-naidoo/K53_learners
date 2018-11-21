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
      component: () => import("./views/TheLogin.vue")
    },
    {
      path: "/app",
      component: () => import("./views/TheApp.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          meta: { requiresAuth: true },
          component: () => import("./views/TheDashboard.vue")
        },
        {
          path: "courses",
          name: "Courses",
          meta: { requiresAuth: true },
          component: () => import("./views/TheCourses.vue")
        }, 
        {
          path: "exams",
          name: "Exams",
          meta: { requiresAuth: true },
          component: () => import("./views/TheExams.vue")
        },
        {
          path: "account",
          name: "Account",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAccount.vue")
        }
      ]
    }
  ]
});
