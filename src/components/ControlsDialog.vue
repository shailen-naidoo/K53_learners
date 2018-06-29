<template lang="pug">
v-dialog( v-model="controlsDialog" fullscreen hide-overlay transition="dialog-bottom-transition"  )    
  v-card( tile )
    v-toolbar( fixed color="green" )
      v-btn( icon @click="closeControlsDialog")
        v-icon( color="white" ) close
      v-toolbar-title.white--text Controls
</template>

<script>
export default {
  data: () => ({

  }),
  computed: {
    controlsDialog() {
      return this.$store.state.controlsDialog;
    }
  },
  methods: {
    closeControlsDialog() {
      this.$store.commit("changeControlsDialog");
    }
  }
}
</script>
