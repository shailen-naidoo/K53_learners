<template lang="pug">
  course( title="Rules of the road" :topics="topics" )
</template>

<script>
import Course from "../components/Course.vue";

export default {
  data: () => ({
    topics: ["General rules","Driving on a divided road","Driving on the shoulder of the road","Parking"]
  }),
  components: {
    Course
  }
}
</script>
