const home = {
  state: {
    advertis: false
  },
  actions: {
    setHeaderAdver({
      commit
    },val){
      commit("SET_HEADER_ADVER",val)
    }
  },
  mutations: {
    SET_HEADER_ADVER(state, booleanV) {
      state.advertis = booleanV;
    }
  }
}

export default home;