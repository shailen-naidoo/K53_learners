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
        path: "courses/course",
        name: "Course",
        component: () => import("./views/AppCourse.vue")
      })
    }
  ]
});
