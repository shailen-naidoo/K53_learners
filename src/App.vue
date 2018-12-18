<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-bottom-nav 
      app 
      fixed 
      color="yellow" 
      :active.sync="page"
      :value="true"
    >
      <v-btn 
        v-for="(page,i) in pages" 
        :key="i"
      >
        <span>{{ page.title }}</span>
        <v-icon>{{ page.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app> 
</template>

<script>
export default {
  name: "App",
  data: () => ({
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
