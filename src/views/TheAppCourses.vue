<template>
  <v-container grid-list-md>
    <v-layout row justify-center>
      <v-flex md6>
        <v-layout column wrap :class="{ 'mt-5 pt-5 px-5': $vuetify.breakpoint.width > 600 }">
          <v-flex v-for="(course,i) in courses" :key="i" class="pointer" @click="showCourseDetails(i)">
            <v-card hover>
              <v-card-text class="text-md-center text-xs-center text-sm-center">
                <v-icon large :color="course.color">{{ course.icon }}</v-icon>
                <p class="headline font-weight-light">{{ course.title }}</p>
                <p class="grey--text font-weight-light">Course {{ i + 1 }}</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-dialog v-model="show_course_details" max-width="500px">
      <v-card>
        <v-card-text class="text-md-center text-sm-center text-xs-center">
          <v-icon large :color="course_details.color">{{ course_details.icon }}</v-icon>
          <p class="headline font-weight-light">{{ course_details.title }}</p>
          <p class="grey--text font-weight-light">
            {{ course_details.description }}
          </p>
          <v-chip label small v-for="(topic,i) in course_details.topics" :key="i">{{ topic }}</v-chip>
          <p v-if="course_details.title === 'Rules of the road'" class="grey--text mt-3">NB: There are more topics </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small flat :color="course_details.color">Take Course</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { auth } from "../helpers/firebase.js";

export default {
  data() {
    return {
      courses: [
        {
          icon: "error",
          title: "Road signs",
          color: "red darken-2",
          description: "This course will cover all the South African approved road signs",
          topics: ["Regulartory signs","Warning signs","Traffic signals","Temporary signs","Road markings","Guidance and Information signs"]
        },
        {
          icon: "assignment",
          title: "Rules of the road",
          color: "green darken-2",
          description: "This course will cover all the rules of the road",
          topics: ["General rules","Driving on a divided road","Driving on the shoulder of the road","Parking"]
        },
        {
          icon: "time_to_leave",
          title: "Controls",
          color: "blue darken-2",
          description: "This course will cover all the important controls of a car",
          topics: ["Foot controls","Hand controls","Adjusting your mirrors","Pre-trip inspection"]
        }
      ],
      course_selected: 0,
      show_course_details: false
    }
  },
  computed: {
    course_details() {
      return this.courses[this.course_selected];
    }
  },
  methods: {
    showCourseDetails(index) {
      this.show_course_details = true;
      this.course_selected = index;
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>

