import Cookies from 'js-cookie';
import AuthenticationResource from '@/api/auth/AuthenticationResource';
import router from '@/router';

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
};

const getters = {
  'form/loading': ({ form: { loading } }) => loading,
  'form/status': ({ form: { status } }) => status,
  'form/value': ({ form: { value } }) => value,
  'form/value/email': ({ form: { value: { email } } }) => email,
  'form/value/password': ({ form: { value: { password } } }) => password,
};

const mutations = {
  'FORM/VALUE/SET': (state, value) => { state.form.value = { ...state.form.value, ...value }; },
  'FORM/STATUS/SET': (state, status) => { state.form.status = status; },
  'FORM/LOADING/SET': (state, loading) => { state.form.loading = loading; },
};

const actions = {
  'form/value/email': ({ commit }, email) => commit('FORM/VALUE/SET', { email }),
  'form/value/password': ({ commit }, password) => commit('FORM/VALUE/SET', { password }),
  'form/reset': ({ commit }) => {
    commit('FORM/VALUE/SET', { email: null, password: null });
    commit('FORM/STATUS/SET', null);
    commit('FORM/LOADING/SET', false);
  },
  login: async ({ commit, getters }) => {
    commit('FORM/LOADING/SET', true);
    const form = getters['form/value'];
    const { status } = await resource.login(form);
    if (status === 200) {
      Cookies.set('AUTH', true, { expires: 7 });
      router.push({ name: 'Dashboard' });
      return;
    }
    commit('FORM/STATUS/SET', status);
    commit('FORM/LOADING/SET', false);
    Cookies.remove('XSRF-TOKEN');
    Cookies.remove('AUTH');
  },
  logout: async () => {
    await resource.logout();
    Cookies.remove('XSRF-TOKEN');
    Cookies.remove('AUTH');
    router.push({ name: 'Login' });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
