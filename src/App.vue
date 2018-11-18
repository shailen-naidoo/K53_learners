<template>
  <v-app>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
    <v-bottom-nav :active.sync="bottom_nav" shift app fixed :value="true" color="yellow">
      <v-btn flat value="dashboard" :to="{ name: 'Dashboard' }">
        <span>Dashboard</span>
        <v-icon>dashboard</v-icon>
      </v-btn>
      <v-btn flat value="courses" :to="{ name: 'Courses' }">
        <span>Courses</span>
        <v-icon>library_books</v-icon>
      </v-btn>
      <v-btn flat value="exams" :to="{ name: 'Exams' }">
        <span>Exams</span>
        <v-icon>assessment</v-icon>
      </v-btn>
      <v-btn flat value="account" :to="{ name: 'Account' }">
        <span>Account</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      bottom_nav: "dashboard"
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>

