import Cookies from 'js-cookie';
import router from '@/router';
import AuthenticationResource from '@/api/auth/AuthenticationResource';

const resource = new AuthenticationResource();

const state = {
  form: {
    value: {
      email: null,
      password: null,
    },
    loading: false,
    status: null,
  },
  current: {
    value: {
      name: null,
      email: null,
    },
    loading: false,
    ready: false,
  },
};

const getters = {
  'form/loading': ({ form: { loading } }) => loading,
  'form/status': ({ form: { status } }) => status,
  'form/value': ({ form: { value } }) => value,
  'form/value/email': ({ form: { value: { email } } }) => email,
  'form/value/password': ({ form: { value: { password } } }) => password,
  'current/loading': ({ current: { loading } }) => loading,
  'current/ready': ({ current: { ready } }) => ready,
  'current/value': ({ current: { value } }) => value,
  'current/value/name': ({ current: { value: { name } } }) => name,
  'current/value/email': ({ current: { value: { email } } }) => email,
};

const mutations = {
  'FORM/SET': (state, form) => { state.form = { ...state.form, ...form }; },
  'FORM/VALUE/SET': (state, value) => { state.form.value = { ...state.form.value, ...value }; },
  'CURRENT/SET': (state, current) => { state.current = { ...state.current, ...current }; },
  'CURRENT/VALUE/SET': (state, value) => { state.current.value = { ...state.current.value, ...value }; },
};

const actions = {
  'form/value/email': ({ commit }, email) => commit('FORM/VALUE/SET', { email }),
  'form/value/password': ({ commit }, password) => commit('FORM/VALUE/SET', { password }),
  'form/reset': ({ commit }) => {
    commit('FORM/SET', {
      value: {
        email: null,
        password: null,
      },
      loading: false,
      status: null,
    });
  },
  login: async ({ commit, getters }) => {
    commit('FORM/SET', { loading: true });
    const form = getters['form/value'];
    const { status } = await resource.login(form);
    if (status === 200) {
      Cookies.set('AUTH', true, { expires: 7 });
      router.push({ name: 'Dashboard' });
      return;
    }
    commit('FORM/SET', { status });
    commit('FORM/SET', { loading: false });
    Cookies.remove('XSRF-TOKEN');
    Cookies.remove('AUTH');
  },
  logout: async () => {
    await resource.logout();
    Cookies.remove('XSRF-TOKEN');
    Cookies.remove('AUTH');
    router.push({ name: 'Login' });
  },
  'current/value/name': ({ commit }, name) => commit('CURRENT/VALUE/SET', { name }),
  'current/value/email': ({ commit }, email) => commit('CURRENT/VALUE/SET', { email }),
  'current/reset': ({ commit }) => {
    commit('CURRENT/SET', {
      value: {
        name: null,
        email: null,
      },
      loading: false,
      ready: false,
    });
  },
  'current/get': async ({ commit }) => {
    commit('CURRENT/SET', { ready: false });
    const { status, data } = await resource.current().get();
    if (status === 200) {
      commit('CURRENT/SET', { value: data, ready: true });
    }
  },
  'current/update': async ({ commit, getters }) => {
    commit('CURRENT/SET', { loading: true });
    const form = getters['current/value'];
    await resource.current().update(form);
    commit('CURRENT/SET', { loading: false });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
