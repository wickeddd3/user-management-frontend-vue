export default {
  breadcrumbs: [
    {
      text: 'Home',
      to: '/',
      exact: true,
    },
    {
      text: 'Profile',
      to: '/profile',
      exact: true,
    },
  ],
  current: {
    ready: false,
    value: {
      firstName: null,
      lastName: null,
      email: null,
    },
  },
  list: {
    ready: false,
    value: [],
    headers: [],
  },
};
