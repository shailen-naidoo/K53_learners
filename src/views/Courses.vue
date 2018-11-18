<template>
  
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
  }
}
</script>
