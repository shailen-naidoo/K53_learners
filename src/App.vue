<template lang="pug">
v-app
  // v-navigation-drawer( v-model="drawer" app="")
    v-list
      v-list-tile(value="true" v-for="(item, i) in items" :key="i")
        v-list-tile-action
          v-icon(v-html="item.icon")
        v-list-tile-content
          v-list-tile-title(v-text="item.title")
  v-toolbar.yellow( fixed app )
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title(v-text="title")
  v-content
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
    section
      v-layout.my-5(column="" wrap="" align-center="")
        v-flex.my-3(xs12="" sm4="")
          .text-xs-center
            h2.headline What you need to know
            span.subheading 
              | The exam consists of the parts below:
        v-flex(xs12="")
          v-container(grid-list-xl="")
            v-layout(row="" wrap="" align-center="")
              v-flex(xs12="" md4="")
                v-card.elevation-1.transparent
                  v-card-text.text-xs-center
                    v-icon(x-large color="red darken-2" ) error
                  v-card-title.layout.justify-center(primary-title="")
                    .headline.text-xs-center road signs 
                  v-card-text.text-xs-center
                    | Road signs gives the driver a quick understanding of certain steps that needs to be taken while on the road
                  v-progress-linear( value="35" height="5" color="red" )
                  v-card-actions
                    v-chip( small color="red lighten-1" text-color="white" )
                      v-avatar( color="red darken-4")
                        v-icon done
                      | 35%
                    v-spacer
                    v-btn( flat @click="openRoadSignsDialog" small ) course
                    v-btn( flat small ) exam
              v-flex(xs12="" md4="")
                v-card.elevation-1.transparent
                  v-card-text.text-xs-center
                    v-icon(x-large color="blue darken-2" ) assignment
                  v-card-title.layout.justify-center(primary-title="")
                    .headline.text-xs-center rules of the road
                  v-card-text.text-xs-center
                    | The rules of the road is the most important thing to know when on the road.
                    | This short course has got you covered
                  v-progress-linear( value="90" height="5" color="blue" )                  
                  v-card-actions
                    v-chip( small color="blue lighten-1" text-color="white" )
                      v-avatar( color="blue darken-4" )
                        v-icon done
                      | 90%
                    v-spacer
                    v-btn( flat @click="openRulesDialog" small ) course
                    v-btn( flat small ) exam
              v-flex(xs12="" md4="")
                v-card.elevation-1.transparent
                  v-card-text.text-xs-center
                    v-icon(x-large color="green darken-2") time_to_leave
                  v-card-title.layout.justify-center(primary-title="")
                    .headline controls
                  v-card-text.text-xs-center
                    | This section covers all the necessary controls that can be found within standard cars and motorcycles in South Africa
                  v-progress-linear( value="65" height="5" color="green" )                  
                  v-card-actions
                    v-chip( small color="green lighten-1" text-color="white" )
                      v-avatar( color="green darken-4" )
                        v-icon done
                      | 65%
                    v-spacer
                    v-btn( flat @click="openControlsDialog" small ) course
                    v-btn( flat small ) exam
    road-signs-dialog
    rules-dialog
    controls-dialog
    // section
      v-parallax(src="https://images.unsplash.com/photo-1477071285213-9ba413bf77b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e45c6c87dce197970cd051f7d75b03ba&auto=format&fit=crop&w=750&q=80" height="380")
        v-layout(column="" align-center="" justify-center="")
          .headline.white--text.mb-3.text-xs-center Web development has never been easier
          em Kick-start your application today
          v-btn.blue.lighten-2.mt-5(dark="" large="" href="/pre-made-themes")
            | Get Started
    // section
      v-container(grid-list-xl="")
        v-layout.my-5(row="" wrap="" justify-center="")
          v-flex(xs12="" sm4="")
            v-card.elevation-0.transparent
              v-card-title.layout.justify-center(primary-title="")
                .headline Company info
              v-card-text
                | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                | Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                | Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
          v-flex(xs12="" sm4="" offset-sm1="")
            v-card.elevation-0.transparent
              v-card-title.layout.justify-center(primary-title="")
                .headline Contact us
              v-card-text
                | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              v-list.transparent
                v-list-tile
                  v-list-tile-action
                    v-icon.blue--text.text--lighten-2 phone
                  v-list-tile-content
                    v-list-tile-title 777-867-5309
                v-list-tile
                  v-list-tile-action
                    v-icon.blue--text.text--lighten-2 place
                  v-list-tile-content
                    v-list-tile-title Chicago, US
                v-list-tile
                  v-list-tile-action
                    v-icon.blue--text.text--lighten-2 email
                  v-list-tile-content
                    v-list-tile-title john@vuetifyjs.com
</template>

<script>
  import RoadSignsDialog from "./components/RoadSignsDialog.vue";
  import RulesDialog from "./components/RulesDialog.vue";
  import ControlsDialog from "./components/ControlsDialog.vue";

  const components = { RoadSignsDialog, RulesDialog, ControlsDialog }

  export default {
    data () {
      return {
        k53InfoDialog: false,
        drawer: true,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        title: 'K53'
      }
    },
    computed: {
      roadSignsDialog() {
        return this.$store.state.roadSignsDialog;
      },
      rulesDialog() {
        return this.$store.state.rulesDialog;
      },
      controlsDialog() {
        return this.$store.state.controlsDialog;
      }
    },
    methods: {
      openRoadSignsDialog() {
        this.$store.commit("changeRoadSignsDialog");
      },
      openRulesDialog() {
        this.$store.commit("changeRulesDialog");
      },
      openControlsDialog() {
        this.$store.commit("changeControlsDialog");
      }
    },
    components
  }
</script>
