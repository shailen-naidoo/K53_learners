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
      v-flex( md6 )
        v-layout( column )
          v-flex( 
            v-for="({ icon, title, color, description, topics },i) in courses"
            md12
            :key="i"
          )
            v-card( hover )
              v-card-text 
                v-icon( 
                  large 
                  :color="color" 
                ) {{ icon }}
                p.headline.font-weight-light {{ title }}
                p.grey--text.font-weight-light {{ description }}
</template>

<script>
export default {
  data: () => ({
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
    ]
  })
}
</script>
