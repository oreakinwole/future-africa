<template>
  <div>
    <p v-show="showAnswerIncompleteError" class="text-danger text-center">
      Please answer all the questions
    </p>

    <p v-if="isQuestionsLoading">Loading...</p>

    <form v-else class="w-50 m-auto" @submit.prevent="handleSubmit">
      <section v-for="(item, index) in testMcq" :key="index">
        <p
          :class="{
            'text-danger': yetToBeAnsweredIndexs.includes(index.toString()),
          }"
        >
          {{ item.question }}
        </p>
        <custom-radio
          v-for="(val, indx) in item.options"
          :key="indx"
          v-model="indexToAnswer[index]"
          :label="val"
          :value="val"
          class="w-25"
        />
      </section>

      <button type="submit" class="mt-5">Submit</button>
    </form>
  </div>
</template>

<script>
import MCQuestions from '~/assets/allMcq.json'
export default {
  name: 'QuestionsPage',
  data() {
    return {
      testMcq: [],

      indexToAnswer: {},
      totalCorrectAnswers: 0,
      isQuestionsLoading: false,
      showAnswerIncompleteError: false,
      yetToBeAnsweredIndexs: [],
    }
  },

  computed: {
    totalQuestions() {
      return this.testMcq.length
    },
  },

  async created() {
    this.isQuestionsLoading = true
    await this.loadQuestions()

    // populate indexToAnswer object to have all the index keys of the Questions Array
    this.testMcq.forEach((_, idx) => {
      this.indexToAnswer[idx] = undefined
    })

    this.isQuestionsLoading = false
  },

  methods: {
    async loadQuestions() {
      const fetch = (mockData, time = 100) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockData)
          }, time)
        })
      }

      this.testMcq = await fetch(MCQuestions);
    },

    handleSubmit() {
      const isNotAllAnswered = Object.values(this.indexToAnswer).includes(
        undefined
      )
      if (isNotAllAnswered) {
        this.showAnswerIncompleteError = true
        this.indicateNotAnswered()
        return
      }

      this.showAnswerIncompleteError = false
      this.yetToBeAnsweredIndexs = []

      // Calculate correct answers
      this.testMcq.forEach((item, index) => {
        if (
          item.correctAnswer.toLowerCase() ===
          this.indexToAnswer[index].toLowerCase()
        )
          this.totalCorrectAnswers += 1
      })

      // send final data to store
      this.$store.dispatch('updateResult', {
        totalCorrectAnswers: this.totalCorrectAnswers,
        totalQuestions: this.totalQuestions,
      })

      this.$router.push({ path: '/result' })
    },

    indicateNotAnswered() {
      for (const [key, value] of Object.entries(this.indexToAnswer)) {
        if (value === undefined) this.yetToBeAnsweredIndexs.push(key)
      }
    },
  },
}
</script>
