<template>
<div>
  <v-slide-x-transition mode="out-in">
    <router-view @show-bottom-nav="showBottomNav"></router-view>
  </v-slide-x-transition>
</div>
</template>

<script>
import { auth } from "../helpers/firebase.js";

export default {
  async beforeRouteEnter({ meta: { requiresAuth }},from,next) {
    const user = await new Promise((resolve,reject) => auth.onAuthStateChanged(user => resolve(user)));

    if(requiresAuth && user) {
      next();
    } else {
      next({ name: "Login" });
    }
  },
  methods: {
    showBottomNav(e) {
      this.$emit("show-bottom-nav",e);
    }
  },
  mounted() {
    this.$emit("show-bottom-nav",true);
  }
}
</script>
