<template>
  <div>
    <v-toolbar color="blue">
      <v-btn large icon :to="{ name: 'Courses' }" @click="$emit('show-bottom-nav',true)"> 
        <v-icon color="white">
          keyboard_arrow_left
        </v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Controls</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("show-bottom-nav",false);
  }
}
</script>
