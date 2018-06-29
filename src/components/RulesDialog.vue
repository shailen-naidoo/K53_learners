<template lang="pug">
v-dialog( v-model="rulesDialog" fullscreen hide-overlay transition="dialog-bottom-transition"  )    
  v-card( tile )
    v-toolbar( fixed color="blue" )
      v-btn( icon @click="closeRulesDialog")
        v-icon( color="white" ) close
      v-toolbar-title.white--text Rules of the road
</template>

<script>
export default {
  data: () => ({

  }),
  computed: {
    rulesDialog() {
        return this.$store.state.rulesDialog;
    }
  },
  methods: {
    closeRulesDialog() {
      this.$store.commit("changeRulesDialog");
    }
  }
}
</script>

