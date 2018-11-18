<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex md6 sm8>
        <v-card flat class="mt-5 pt-5" color="grey lighten-5">
          <v-card-text class="headline font-weight-light">
            <p class="text-md-center text-sm-center text-xs-center">
              I notice you do not have anything in your dashboard. Why don't you try to do a course?
            </p>
            <p class="text-md-center text-sm-center text-xs-center">
              <v-btn color="yellow lighten-2" depressed :to="{ name: 'Courses' }">Check out courses</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { auth } from "../helpers/firebase";

export default {
  async beforeRouteEnter({ meta: { requiresAuth }},from,next) {
    const user = await new Promise((resolve,reject) => auth.onAuthStateChanged(user => resolve(user)));

    if(requiresAuth && user) {
      next();
    }
    else {
      next({ name: "Login" });
    }
  }
}
</script>
