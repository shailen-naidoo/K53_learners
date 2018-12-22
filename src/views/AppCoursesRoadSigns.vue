<template lang="pug">
  course( title="Road signs" :topics="topics" )
</template>

<script>
import Course from "../components/Course.vue";

export default {
  data: () => ({
    topics: ["Regulartory signs","Warning signs","Traffic signals","Temporary signs","Road markings","Guidance signs","Information signs"]
  }),
  components: {
    Course
  }
}
</script>
