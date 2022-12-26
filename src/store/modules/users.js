import initialState from '@/config/users.state.js';

const state = {
  ...initialState,
};

const getters = {
  breadcrumbs: ({ breadcrumbs }) => breadcrumbs,
  'current/ready': ({ current: { ready } }) => ready,
  'current/value': ({ current: { value } }) => value,
  'current/value/firstname': ({ current: { value: { firstName } } }) => firstName,
  'current/value/lastname': ({ current: { value: { lastName } } }) => lastName,
  'current/value/email': ({ current: { value: { email } } }) => email,
};

const mutations = {
  'CURRENT/SET': (state, current) => { state.current = { ...state.current, ...current }; },
  'CURRENT/VALUE/SET': (state, value) => { state.current.value = { ...state.current.value, ...value }; },
};

const actions = {
  'current/get': ({ commit }) => {
    commit('CURRENT/SET', { ready: true, value: {} });
  },
  'current/value/firstname': ({ commit }, firstName) => commit('CURRENT/VALUE/SET', { firstName }),
  'current/value/lastname': ({ commit }, lastName) => commit('CURRENT/VALUE/SET', { lastName }),
  'current/value/email': ({ commit }, email) => commit('CURRENT/VALUE/SET', { email }),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
