export default {
  list: {
    ready: false,
    loading: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email',
      },
    ],
    value: null,
    options: {
      itemsPerPage: 10,
      page: 1,
      sortBy: [ 'name' ],
    },
    footerOptions: {
      'items-per-page-options': [ 10, 20, 30, 40, 50 ],
    },
  },
  form: {
    value: {
      name: null,
      email: null,
      password: null,
    },
    loading: false,
    errors: {},
    status: null,
  },
};
