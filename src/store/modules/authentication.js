import Cookies from 'js-cookie';
import AuthenticationResource from '@/api/auth/AuthenticationResource';
import router from '@/router';

const resource = new AuthenticationResource();

const state = {
  form: {
    email: 'aylin52@example.org',
    password: 'password',
  },
};

const getters = {
  form: ({ form }) => form,
  'form/email': ({ form: { email } }) => email,
  'form/password': ({ form: { password } }) => password,
};

const mutations = {
  'FORM/SET': (state, form) => { state.form = { ...state.form, ...form }; },
};

const actions = {
  'form/email': ({ commit }, email) => commit('FORM/SET', { email }),
  'form/password': ({ commit }, password) => commit('FORM/SET', { password }),
  login: async ({ getters }) => {
    const { status } = await resource.login(getters.form);
    if (status === 200) {
      Cookies.set('AUTH', true, { expires: 7 });
      router.push({ name: 'Dashboard' });
      return;
    }
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
