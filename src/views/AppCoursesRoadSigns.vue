<template lang="pug">
  div
    v-toolbar( app dense flat color="grey lighten-5" )
      v-tooltip( bottom )
        v-btn( slot="activator" icon :to="{ name: 'Courses' }" )
          v-icon keyboard_arrow_left
        span Back to courses
      v-toolbar-title Road signs
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
            v-flex( md4 sm4 xs12 v-for="(topic,i) in topics" :key="i" ) 
              v-card( hover )
                v-img( src="https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif" )
                v-card-title {{ topic }}
</template>

<script>
export default {
  data: () => ({
    topics: ["Regulartory signs","Warning signs","Traffic signals","Temporary signs","Road markings","Guidance signs","Information signs"]
  })
}
</script>
