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
    },
    updateActiveStateOfTopic(state,val) {
      state.courses[state.course_selected].topics[val].active = !state.courses[state.course_selected].topics[val].active;
    },
    updateFinishedStateOfTopic(state,val) {
      state.courses[state.course_selected].topics[val].finished = !state.courses[state.course_selected].topics[val].finished;
    }
  },
  getters: {
    courseSelectedInfo(state) {
      return state.courses[state.course_selected];
    }
  }
})
