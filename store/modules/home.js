const state = () => ({
  advertis: false
})

const mutations = {
  setHeaderAdver(state, booleanV) {
    state.advertis = booleanV;
  }
}

const actions = {
  setHeaderAdver: ({
    commit
  },val) => {
    console.log(val)
    commit("setHeaderAdver",val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
