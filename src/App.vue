<template lang="pug">
v-app
  v-toolbar.yellow( fixed app )
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-toolbar-title(v-text="title")
  v-content
    home
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
</template>

<script>
  import Home from "./components/Home.vue";

  import RoadSignsDialog from "./components/RoadSignsDialog.vue";
  import RulesDialog from "./components/RulesDialog.vue";
  import ControlsDialog from "./components/ControlsDialog.vue";

  const components = { Home, RoadSignsDialog, RulesDialog, ControlsDialog }

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
