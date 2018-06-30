<template lang="pug">
section
  v-parallax(src="https://preview.ibb.co/fNMvc8/tom_holmes_580119_unsplash.jpg" )
    v-layout.white--text(column align-center justify-center)
      v-icon( size="100px" color="yellow" ) book
      h1.white--text.mb-2.display-1.text-xs-center K53 Learners Guide
      h1.subheading.mb-3.text-xs-center Getting you ready for the test
      v-btn.yellow.mt-5.black--text( dark large @click="k53InfoDialog = true" )
        | What is the K53?
  v-dialog( v-model="k53InfoDialog" max-width="500px")
    v-card
      v-card-title.headline What is the K53?
      v-card-text
        | The term K53 is simply a file reference that was used when the driving test was changed to incorporate a particular method of 'defensive driving'.
        | The K53 defensive driving system means being fully alert and attentive all the time while driving, 
        | in order to maintain a clear space around your vehicle and avoid a collision with other road users.
        | It also means that you must give other road users advance warning of your intentions so that they too can use the road in safety.
      v-card-actions
        v-spacer
        v-btn( flat color="blue" @click="k53InfoDialog = false") ok
</template>

<script>
export default {
  data: () => ({
    k53InfoDialog: false
  })
}
</script>
