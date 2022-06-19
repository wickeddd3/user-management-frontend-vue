import initialState from '@/config/sidebar.state.js';

const state = {
  ...initialState,
};

const getters = {
  show: ({ show }) => show,
  mini: ({ mini }) => mini,
};

const mutations = {
  'SHOW/TOGGLE': state => { state.show = !state.show; },
  'MINI/TOGGLE': state => { state.mini = !state.mini; },
};

const actions = {
  'show/toggle': ({ commit }) => commit('SHOW/TOGGLE'),
  'mini/toggle': ({ commit }) => commit('MINI/TOGGLE'),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
