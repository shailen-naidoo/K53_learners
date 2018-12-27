<template lang="pug">
  div
    v-toolbar( app dense flat color="grey lighten-5" )
      v-btn( icon :to="{ name: 'Courses' }" )
        v-icon keyboard_arrow_left
      v-toolbar-title Courses / {{ courseSelectedInfo.title }}
    v-container( 
      fill-height
      grid-list-md
    )
      v-layout(
        row 
        wrap
        justify-center
        align-center
      )
        v-flex( md8 sm8 xs12 )
          v-subheader.pl-0( v-if="showActiveSubheader" ) Active
          v-layout( row wrap )
            v-flex( v-if="active" md4 sm4 xs12 v-for="({ title, active },i) in courseSelectedInfo.topics" :key="i" @click="$router.push({ name: 'Exercises', query: { topic: i }})" ) 
              v-card( hover )
                v-img( src="https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif" )
                v-card-title {{ title }}
          v-subheader.pl-0( v-if="showActiveSubheader" ) Inactive
          v-layout( row wrap )
            v-flex( v-if="!active" md4 sm4 xs12 v-for="({ title, active },i) in courseSelectedInfo.topics" :key="i" @click="$router.push({ name: 'Exercises', query: { topic: i }})" ) 
              v-card( hover )
                v-img( src="https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif" )
                v-card-title {{ title }}
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["courseSelectedInfo"]),
    showActiveSubheader() {
      return this.courseSelectedInfo.topics.filter(val => val.active === true).length > 0
    }
  },
  methods: mapMutations(["updateActiveStateOfTopic","updateFinishedStateOfTopic"])
}
</script>
