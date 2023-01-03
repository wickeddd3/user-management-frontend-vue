const state = {
  value: {
    show: false,
    text: null,
  },
};

const getters = {
  show: ({ value: { show } }) => show,
  text: ({ value: { text } }) => text,
};

const mutations = {
  'SNACKBAR/SET': (state, snackbar) => { state.value = { ...state.value, ...snackbar }; },
};

const actions = {
  show: ({ commit }, show) => commit('SNACKBAR/SET', { show }),
  set: ({ commit }, snackbar) => commit('SNACKBAR/SET', snackbar),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
