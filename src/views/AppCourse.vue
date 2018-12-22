<template lang="pug">
  div
    v-toolbar( app dense flat color="grey lighten-5" )
      v-btn( icon :to="{ name: 'Courses' }" )
        v-icon keyboard_arrow_left
      v-toolbar-title {{ courseSelectedInfo.title }}
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
          v-layout( row wrap )
            v-flex( md4 sm4 xs12 v-for="({ title },i) in courseSelectedInfo.topics" :key="i" ) 
              v-card( hover )
                v-img( src="https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif" )
                v-card-title {{ title }}
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["courseSelectedInfo"])
}
</script>
