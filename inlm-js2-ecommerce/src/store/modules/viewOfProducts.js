

export default ({
  state: {
    view: 'List'
  },
  getters: {
    view: state => state.view
  },
  mutations: {
    SET_VIEW: (state, val) => {
      state.view = val
    }
  },
  actions: {
     setView: ({commit}, val) => {
       commit('SET_VIEW', val)
     }
  },
})