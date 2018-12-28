<template lang="pug">
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
        md6 
        sm8 
      )
        v-layout( column )
          v-flex( 
            v-for="({ icon, title, color, description },i) in courses"
            md12
            :key="i"
            @click="showDialog(i)"
          )
            v-card( hover )
              v-card-text 
                v-icon( 
                  large 
                  :color="color" 
                ) {{ icon }}
                p.headline.font-weight-light {{ title }}
                p.grey--text.font-weight-light {{ description }}
    v-dialog( 
      v-model="show_courses_info" 
      scrollable 
      max-width="565px" 
    )
      v-card
        v-card-text
          v-subheader Topics
          v-list.pt-0
            v-list-tile( 
              v-for="({ title },i) in courseSelectedInfo.topics" 
              :key="i" 
            )
              v-list-tile-content {{ title }}
        v-card-actions
          v-spacer
          v-btn( 
            small 
            flat 
            :to="{ name: 'Course' }" 
          ) start course
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    show_courses_info: false
  }),
  methods: {
    showDialog(i) {
      this.course_selected = i;
      this.show_courses_info = true;
    }
  },
  computed: {
    ...mapState({ courses: state => state.courses }),
    ...mapGetters(["courseSelectedInfo"]),
    course_selected: {
      get() {
        return this.$store.state.course_selected;
      },
      set(val) {
        this.$store.commit("updateCourseSelected",val);
      }
    }
  }
}
</script>
