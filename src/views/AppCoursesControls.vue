<template lang="pug">
  course( title="Controls" :topics="topics" )
</template>

<script>
import Course from "../components/Course.vue";

export default {
  data: () => ({
    topics: ["Foot controls","Hand controls","Adjusting your mirrors","Pre-trip inspection"]
  }),
  components: {
    Course
  }
}
</script>
