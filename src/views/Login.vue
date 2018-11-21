<template>
<v-container>
  <v-layout class="mt-5">
    <v-flex md4 offset-md4 class="mt-5">
     <v-card>
       <v-card-title class="headline"><v-spacer></v-spacer>Sign into App<v-spacer></v-spacer></v-card-title>
       <v-card-text class="text-md-center">
          <v-btn small color="yellow lighten-2 mb-4" depressed @click="login()">Sign in with Google</v-btn>
       </v-card-text>
     </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { auth, provider } from "../helpers/firebase";

export default {
  methods: {
    login() {
      auth.signInWithPopup(provider)
        .then(() => this.$router.replace({ name: "Dashboard" }));
    }
  },
  async beforeRouteEnter(to,from,next) {
    const user = await new Promise((resolve,reject) => auth.onAuthStateChanged(user => resolve(user)));

    if(user) {
      next({ name: "Dashboard" });
    } else {
      next(vm => vm.$emit("show-bottom-nav",false));
    }
  }
}
</script>

