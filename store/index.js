// import cookie from 'cookie'
export const state = () => ({
  totalCorrectAnswers: 1,
  totalQuestions: 4
})

export const mutations = {
  SET_RESULT(state, {totalCorrectAnswers, totalQuestions}) {
    state.totalCorrectAnswers = totalCorrectAnswers
    state.totalQuestions = totalQuestions
  },
}

export const actions = {
  updateResult({commit}, payload) {
    commit('SET_RESULT', payload)
  }
}


export const getters = {
  finalResult(state) {
    return state
  }
}

