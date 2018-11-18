<template>
  <v-container grid-list-md>
    <v-layout row wrap :class="{ 'mt-5 pt-5 px-5': $vuetify.breakpoint.width > 600 }">
      <v-flex md4 v-for="(course,i) in courses" :key="i" @click="log()" class="pointer">
        <v-card hover>
            <v-card-text class="text-md-center text-xs-center text-sm-center">
            <v-icon large :color="course.color">{{ course.icon }}</v-icon>
            <p class="headline font-weight-light">{{ course.title }}</p>
            <p class="grey--text">Course {{ i + 1 }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { auth } from "../helpers/firebase.js";

export default {
  data() {
    return {
      courses: [
        {
          icon: "error",
          title: "Road signs",
          color: "red darken-2"
        },
        {
          icon: "assignment",
          title: "Rules of the road",
          color: "green darken-2"
        },
        {
          icon: "time_to_leave",
          title: "Controls",
          color: "blue darken-2"
        }
      ]
    }
  },
  methods: {
    log() {
      console.log("hello")
    }
  },
  async beforeRouteEnter({ meta: { requiresAuth }},from,next) {
    const user = await new Promise((resolve,reject) => auth.onAuthStateChanged(user => resolve(user)));

    if(requiresAuth && user) {
      next();
    } else {
      next({ name: "Login" });
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>

