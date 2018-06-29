<template lang="pug">
v-dialog( v-model="roadSignsDialog" fullscreen hide-overlay transition="dialog-bottom-transition"  )    
  v-card( tile )
    v-toolbar( fixed :color="appbarColor" :dense="!hide" )
      v-btn( icon @click="appbarFunc" )
        v-icon( :color="appbarIconColor" ) {{ hide ? "close": "keyboard_arrow_left" }}
      v-toolbar-title( :class="[appbarTextColor]") {{ title }}
    v-card-text
      v-container( fluid grid-list-md )
        v-slide-y-transition
          v-layout.mt-5( row wrap v-show="hide" )
            v-flex( md4 v-for="({ title, body, image, open, style: { color, textColor } },i) in subgroups" :key="i" )
              v-card
                v-card-title.headline {{ title }}
                v-card-text
                  p {{ body }}
                v-card-media( :src="image" height="200px")
                v-card-actions 
                  v-spacer 
                  v-btn( flat small @click="openSigns(title,color,textColor)") check out
</template>

<script>
export default {
  data: () => ({
    hide: true,
    title: "Road signs",
    appbarColor: "red",
    appbarTextColor: "white--text"
  }),
  computed: {
    roadSignsDialog() {
      return this.$store.state.roadSignsDialog;
    },
    appbarFunc() {
      return this.hide ? this.closeRoadSignsDialog : this.backToMenu;
    },
    appbarIconColor() {
      return this.appbarTextColor.includes("white") ? "white" : "black";
    },
    subgroups() {
      return [
        {
          title: "Regulatory Signs",
          body: "Regulatory Signs regulate and control the actions of users on the road",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3kIEYYlTO7q8ofvCRJ1Ts61ddYWuvQkO_VuLSrFfWgs11ugQ5g",
          style: {
            color: "red",
            textColor: "white--text"
          }
        },
        {
          title: "Warning Signs",
          body: "Warning signs alert road users in time to dangerous conditions on or nex to the road",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhJlyQETbmIFrfiyPL7rtnBVrenlz1Lvc-QlkxYeuGIR7VMar",
          style: {
            color: "yellow",
            textColor: "black--text"
          }
        },
        {
          title: "Guidance Signs",
          body: "Guidance signs are an aid to the road user. The large signs on freeways are guidance signs",
          image: "https://www.arrivealive.co.za/ckfinder/userfiles/images/a%20road%20sign%20to%20help%20those%20without%20a%20clue%20at%20the%20roundabout___.jpg",
          style: {
            color: "green",
            textColor: "white--text"
          }
        },
        {
          title: "Information Signs",
          body: "Information signs supply general information to the road user, such as nearby hotels",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0mhVPbYilPSgc3AGlOkPxLnNqLUjXSfpKeYHU29w6aEZzxgf5A",
          style: {
            color: "blue",
            textColor: "white--text"
          }
        },
        {
          title: "Road Markings",
          body: "Road markings regulates, control and warn traffic by defining carriageway and traffic lane limits...",
          image: "data:image/jpeg;base64,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",
          style: {
            color: "grey",
            textColor: "white--text"
          }
        },
        {
          title: "Traffic Signals",
          body: "Traffic signals regulate vehicular and pedestrian traffic. Failure to obey traffic signals is punishable",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6om_LaK_4rt5iD8pBxK1BF3p6ryWqG_EzDnojORW2sOBjFIU",
          style: {
            color: "orange",
            textColor: "white--text"
          }
        }
      ]
    }
  },
  methods: {
    closeRoadSignsDialog() {
      this.$store.commit("changeRoadSignsDialog");
    },
    backToMenu() {
      this.hide = true;
      this.title = "Road Signs" 
      this.appbarColor = "red";
      this.appbarTextColor = "white--text";
    },
    openSigns(title,color = "red",textColor = "white--text") {
      this.hide = false;
      this.title = title;
      this.appbarColor = color;
      this.appbarTextColor = textColor;
    }
  }
}
</script>