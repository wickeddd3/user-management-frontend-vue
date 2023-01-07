import router from '@/router';
import initialState from '@/config/users.state.js';
import UserResource from '@/api/user/UserResource';

const resource = new UserResource();

const state = {
  ...initialState,
};

const getters = {
  'list/ready': ({ list: { ready } }) => ready,
  'list/loading': ({ list: { loading } }) => loading,
  'list/headers': ({ list: { headers } }) => headers,
  'list/options': ({ list: { options } }) => options,
  'list/options/footer': ({ list: { footerOptions } }) => footerOptions,
  'list/value/items': ({ list: { value } }) => value?.data,
  'list/value/items/total': ({ list: { value } }) => value?.total,
  'form/loading': ({ form: { loading } }) => loading,
  'form/errors': ({ form: { errors } }) => errors,
  'form/status': ({ form: { status } }) => status,
  'form/value': ({ form: { value } }) => value,
  'form/value/name': ({ form: { value: { name } } }) => name,
  'form/value/email': ({ form: { value: { email } } }) => email,
  'form/value/password': ({ form: { value: { password } } }) => password,
};

const mutations = {
  'LIST/SET': (state, list) => { state.list = { ...state.list, ...list }; },
  'LIST/OPTIONS/SET': (state, options) => { state.list.options = { ...state.list.options, ...options }; },
  'FORM/SET': (state, form) => { state.form = { ...state.form, ...form }; },
  'FORM/VALUE/SET': (state, value) => { state.form.value = { ...state.form.value, ...value }; },
};

const actions = {
  'list/get': async ({ commit }, params) => {
    const { data } = await resource.list(params);
    commit('LIST/SET', { value: data, ready: true });
  },
  'list/options': async ({ commit, dispatch }, options) => {
    commit('LIST/SET', { loading: true });
    commit('LIST/OPTIONS/SET', options);

    const {
      itemsPerPage, page, sortBy, sortDesc,
    } = options;
    const [ sort ] = sortBy;
    const [ desc ] = sortDesc;
    let direction;

    if (desc === true) {
      direction = 'desc';
    } else if (desc === false) {
      direction = 'asc';
    }

    await dispatch('list/get', {
      page, sort, direction, per_page: itemsPerPage,
    });
    commit('LIST/SET', { loading: false });
  },
  'list/reset': ({ commit }) => commit('LIST/SET', { value: null, ready: false }),
  'form/value/name': ({ commit }, name) => commit('FORM/VALUE/SET', { name }),
  'form/value/email': ({ commit }, email) => commit('FORM/VALUE/SET', { email }),
  'form/value/password': ({ commit }, password) => commit('FORM/VALUE/SET', { password }),
  'form/reset': ({ commit }) => {
    commit('FORM/SET', {
      value: {
        name: null,
        email: null,
        password: null,
      },
      loading: false,
      errors: {},
      status: null,
    });
  },
  create: async ({ commit, getters, dispatch }) => {
    commit('FORM/SET', { loading: true });
    const form = getters['form/value'];
    const { status, data } = await resource.create(form);
    commit('FORM/SET', { status, errors: (data.errors || {}), loading: false });
    if (status === 201) {
      router.push({ path: '/users' });
      dispatch('snackbar/set', { show: true, text: 'User has been successfully added.' }, { root: true });
    }
  },
  delete: async ({ getters, dispatch }, id) => {
    const { status } = await resource.delete(id);
    if (status === 200) {
      const options = getters['list/options'];
      dispatch('list/get', options);
      dispatch('snackbar/set', { show: true, text: 'User has been successfully deleted.' }, { root: true });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
