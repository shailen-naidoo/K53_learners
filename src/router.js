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
          component: () => import("./views/TheAppDashboard.vue")
        },
        {
          path: "courses",
          name: "Courses",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAppCourses.vue")
        }, 
        {
          path: "courses/roadsigns",
          name: "Road signs",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAppCoursesRoadSigns.vue") 
        },
        {
          path: "courses/rulesoftheroad",
          name: "Rules of the road",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAppCoursesRulesOfTheRoad.vue") 
        },
        {
          path: "courses/controls",
          name: "Controls",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAppCoursesControls.vue") 
        },
        {
          path: "exams",
          name: "Exams",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAppExams.vue")
        },
        {
          path: "account",
          name: "Account",
          meta: { requiresAuth: true },
          component: () => import("./views/TheAppAccount.vue")
        }
      ]
    }
  ]
});
