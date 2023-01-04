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
};

const mutations = {
  'LIST/SET': (state, list) => { state.list = { ...state.list, ...list }; },
  'LIST/OPTIONS/SET': (state, options) => { state.list.options = { ...state.list.options, ...options }; },
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
