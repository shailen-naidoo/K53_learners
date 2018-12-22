import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { courses } from "./assets/courses.json"

export default new Vuex.Store({
  state: { 
    courses,
    course_selected: 0
  },
  mutations: {
    updateCourseSelected(state,val) {
      state.course_selected = val;
    }
  },
  getters: {
    courseSelectedInfo(state) {
      return state.courses[state.course_selected];
    }
  }
})
