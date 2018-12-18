<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-bottom-nav 
      app 
      fixed 
      color="yellow" 
      v-model="show_bottom_nav"
      :active.sync="page"
      :value="true"
    >
      <v-btn 
        v-for="({ title, icon },i) in pages" 
        :value="title.toLowerCase()"
        :to="{ name: title }"
        :key="i"
      >
        <span>{{ title }}</span>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app> 
</template>

<script>
export default {
  name: "App",
  data: () => ({
    show_bottom_nav: true,
    page: "dashboard",
    pages: [
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
  })
}
</script>
