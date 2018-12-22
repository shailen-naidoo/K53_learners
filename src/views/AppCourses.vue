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
              v-for="(topic,i) in course_selected_info" 
              :key="i" 
            )
              v-list-tile-content {{ topic }}
        v-card-actions
          v-spacer
          v-btn( 
            small 
            flat 
            :to="{ name: courses[course_selected].title }" 
          ) start course
</template>

<script>
export default {
  data: () => ({
    show_courses_info: false,
    course_selected: 0,
    courses: [
      {
        icon: "error",
        title: "Road signs",
        color: "red darken-2",
        description: "This course will cover all the South African approved road signs",
        topics: ["Regulartory signs","Warning signs","Traffic signals","Temporary signs","Road markings","Guidance signs","Information signs"]
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
    ]
  }),
  methods: {
    showDialog(i) {
      this.course_selected = i;
      this.show_courses_info = true;
    }
  },
  computed: {
    course_selected_info() {
      return this.courses[this.course_selected].topics;
    }
  }
}
</script>
