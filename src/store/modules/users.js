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
  'list/ready': ({ list: { ready } }) => ready,
  'list/headers': ({ list: { headers } }) => headers,
  'list/options': ({ list: { options } }) => options,
  'list/footer/options': ({ list: { footerOptions } }) => footerOptions,
  'list/value/loading': ({ list: { value: { loading } } }) => loading,
  'list/value/items': ({ list: { value: { items } } }) => items,
  'list/value/items/server/items/length': ({ list: { value: { items } } }) => items.length,
};

const mutations = {
  'CURRENT/SET': (state, current) => { state.current = { ...state.current, ...current }; },
  'CURRENT/VALUE/SET': (state, value) => { state.current.value = { ...state.current.value, ...value }; },
  'LIST/SET': (state, list) => { state.list = { ...state.list, ...list }; },
  'LIST/OPTIONS/SET': (state, options) => { state.list.options = { ...state.list.options, ...options }; },
};

const actions = {
  'list/get': ({ commit }) => {
    commit('LIST/SET', { ready: true });
  },
  'list/options': ({ commit, dispatch }, options) => {
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

    const sortValue = [ sort, direction ].filter(value => value).join(',');
    dispatch('list/get', { page: page - 1, sort: sortValue, size: itemsPerPage });
  },
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
