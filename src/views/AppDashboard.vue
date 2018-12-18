<template lang="pug">
  v-container(
    fill-height
    text-md-center
    text-sm-center
    text-xs-center
  )
    v-layout(
      row
      justify-center
      align-center
    )
      v-flex(
        md6
        sm8
        xs12
      )
        h1.headline.font-weight-light {{ text }}
        v-btn(
          round
          depressed
          color="yellow"
          class="mt-4"
          :to="{ name: 'Courses' }"
        ) courses
</template>

<script>
export default {
  data: () => ({
    text: "I notice you do not have anything in your dashboard. Why don't you try to do a course?"
  })
}
</script>
