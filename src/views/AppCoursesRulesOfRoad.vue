<template lang="pug">
  course( title="Rules of the road" :topics="topics" )
</template>

<script>
import Course from "../components/Course.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["courseSelectedInfo"]),
    topics() {
      return this.courseSelectedInfo.topics.map(({ title }) => title);
    }
  },
  components: {
    Course
  }
}
</script>
