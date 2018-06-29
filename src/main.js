import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuex from "vuex";
import 'vuetify/dist/vuetify.css'

import store from "./store/index.js";

Vue.use(Vuetify);
Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
