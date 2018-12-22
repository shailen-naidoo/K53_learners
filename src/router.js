import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/app",
      name: "App",
      component: () => import("./views/App.vue"),
      children: ["Dashboard","Courses","Exams","Account"].map(page => ({
        path: page.toLowerCase(),
        name: page,
        component: () => import(`./views/App${page}.vue`)
      })).concat({
        path: "courses/roadsigns",
        name: "Road signs",
        component: () => import("./views/AppCoursesRoadSigns.vue")
      }).concat({
        path: "courses/rulesoftheroad",
        name: "Rules of the road",
        component: () => import("./views/AppCoursesRulesOfRoad.vue")
      }).concat({
        path: "courses/controls",
        name: "Controls",
        component: () => import("./views/AppCoursesControls.vue")
      })
    }
  ]
});
