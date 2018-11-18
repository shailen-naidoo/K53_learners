<template>
<div>
  <v-btn small @click="login()">sigin</v-btn>
</div>
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

