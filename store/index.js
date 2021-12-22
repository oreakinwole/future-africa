// import cookie from 'cookie'
export const state = () => ({
  correctAnswers: 1,
  totalQuestions: 4
})

export const mutations = {
  SET_RESULT(state, payload) {
    state = payload
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

