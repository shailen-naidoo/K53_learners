<template lang="pug">
  div
    v-toolbar( app dense flat color="grey lighten-5" )
      v-btn( icon :to="{ name: 'Course' }" )
        v-icon keyboard_arrow_left
      v-toolbar-title Courses / {{ courseSelectedInfo.title }} / {{ topic.title }}
    v-container(
      fill-height
      grid-list-md
      text-md-center
      text-sm-center
      text-xs-center
    )
      v-layout(
        justify-center
        align-center
      )
        v-flex( 
          md4
          sm8 
        )
          v-card
            v-window( v-model="step" )
              v-window-item( v-for="(info,i) in topic.info" :key="i" :value="i" )
                v-card-text
                  v-img( :src="info.img" contain )
                  p.mt-4.subheading {{ info.text }}
                  p {{ info.description }}
            v-card-actions
              v-btn( icon @click="step--" )
                v-icon keyboard_arrow_left
              v-spacer
              v-btn( icon @click="step++" )
                v-icon keyboard_arrow_right
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    step: 0
  }),
  computed: {
    ...mapGetters(["courseSelectedInfo"]),
    topic() {
      return this.courseSelectedInfo.topics[this.$router.currentRoute.query.topic]
    }
  }
}
</script>
