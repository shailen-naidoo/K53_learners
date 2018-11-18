<template>
<div>
  <v-btn small @click="login()">sigin</v-btn>
</div>
</template>

<script>
import { auth, provider, LOCAL } from "../helpers/firebase";

export default {
  methods: {
    login() {
      auth.signInWithPopup(provider)
        .then(() => this.$router.replace({ name: "Dashboard" }));
    }
  }
}

// auth.onAuthStateChanged(user => console.log(user));
</script>

