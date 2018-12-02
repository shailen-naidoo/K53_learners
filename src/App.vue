<template>
  <v-app>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view @show-bottom-nav="showBottomNav"></router-view>
      </v-slide-y-transition>
    </v-content>
    <v-bottom-nav v-model="show_bottom_nav" :active.sync="bottom_nav" app fixed :value="true" color="yellow">
      <v-btn v-for="(page,i) in bottom_nav_pages" :key="i" :to="{ name: page.title }" flat :value="page.title.toLowerCase()" :ripple="false">
        <span>{{ page.title }}</span>
        <v-icon>{{ page.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      show_bottom_nav: false,
      bottom_nav: "dashboard",
      bottom_nav_pages: [
        {
          title: "Dashboard",
          icon: "dashboard"
        },
        {
          title: "Courses",
          icon: "library_books"
        },
        {
          title: "Exams",
          icon: "assessment"
        },
        {
          title: "Account",
          icon: "account_circle"
        }
      ]
    }
  },
  methods: {
    showBottomNav(e) {
      this.show_bottom_nav = e;
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>

