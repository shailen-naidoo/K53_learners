<template>
  <div>
    <v-toolbar app color="red" fixed scroll-off-screen>
      <v-btn icon :to="{ name: 'Courses' }" @click="$emit('show-bottom-nav',true)"> 
        <v-icon color="white">
          keyboard_arrow_left
        </v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Road signs</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex v-for="(topic,i) in topics" :key="i" md4 sm6 xs12>
          <v-card>
            <v-card-title class="subheading">
              {{ topic }}
              <v-spacer/>
              <v-progress-circular :size="30" color="red">0</v-progress-circular>
            </v-card-title>
            <v-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAM1BMVEW8vr7///+5u7vd3t7GyMj39/fS1NTCw8Pj4+PLzMy3ubn8/PzY2dnx8fHg4eHZ2tro6en7XmzxAAAC10lEQVR4nO3c2bKqMBBAUdLMk/L/X3tV8EhIiAi5ZUnv9ejwkF1IJAxJAgAAAAAAAAAAAAAAAAAAAADAjcTz7aHEJ2WRxtJlZwsklYmpL789oKikj1rn5kx9JI1dx/Rn+n210fOY7NtjiieLX8dcz7P5/I88KXnIQ555nvyoc+dJmoPyU+c5+m+OPEEa83xwFK4vj5TdpUqLZNNwteWR7Hm0OmwJpCyPdbBavx+xrjxyMeajPqrySGFs6xPbtPNWlcdZ6BhWxizJtW8voiuPdGbJv/nI9f5epS2Pu8TaeQc9fk5bnsZdRKw8g5bc6Mzj1PHtfGSYpSPPgtTzLUtTHsnNkjvo14fU5XHPDdbLr85mN2153EXWPLDx6Mvzt9d9KpZjfu15FOZJEnvv407r84AK85TzPr5DCqM6z3zz6Brni9Yxq5o886VTyaq8bds+9a2GWXObkjy1ya0Wj1j+xeYm15jHmNaZo7zE6MxjzGXL8Gq1ebzjW5zQGdd5dOZxVpZFsqIr6vKVyP7bqCyPsT8k3TT0/FJOQ7fXy7TlGaz53ZqkxplNrPUybXlmP6/lOYt2fMt6TV2evwP0xr109T7zl7rzPFfenfNdUx97wUNfnmnzsbeSp1qsvz0K84wLPGvXzJf2RqUwT994zwZOb6rP83hhpc6tj/o8qWy+WUdjnrzx75fJM71iX+JDHjtPt/luHZV5tt/LpDLPduQhD3kc5AkiTxB5gsgTRJ4g8gSRJ4g8QeQJIk8QeYLsPHufidDpyLP3WUf37yrIk5S7HufzOCWmIY+Uy8u938vHaxI05Fm70DLg+QUdeXYjT9DZ8xx83uXJ83TFQe2p88RDHvKQJyHPG5uvUfnAtntWfkL8B+4uL6n/bfF/Xf6Hbfwo2bsEtmbT7U6/Q8rKfeTBXu2w4TFaP0aaow/Qfx1ZnC4OAAAAAAAAAAAAAAAAAAAAAAAAAAAh/wCIhyuxsX66VwAAAABJRU5ErkJggg=="></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn small flat>Check out</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: ["Regulatory signs","Warning signs","Traffic signals","Temporary signs","Road markings","Guidance signs"]
    }
  },
  mounted() {
    this.$emit("show-bottom-nav",false);
  }
}
</script>