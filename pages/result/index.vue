<template>
  <div class="m-auto">
    <p>Your answers were submitted successfully</p>
    <span>Your score: {{ finalResult.correctAnswers }} / {{ totalQuestions }} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ResultPage',

  computed: {
    ...mapGetters(['finalResult']),
  },
}
</script>

<style></style>
