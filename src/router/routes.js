export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      guestOnly: true,
    },
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login/index.vue'),
  },
  {
    path: '/',
    name: 'Dashboard',
    meta: {
      authOnly: true,
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard/index.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    meta: {
      authOnly: true,
    },
    component: () => import(/* webpackChunkName: "users" */ '../pages/Users/index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      authOnly: true,
    },
    component: () => import(/* webpackChunkName: "profile" */ '../pages/Profile/index.vue'),
  },
  {
    path: '/profile/password',
    name: 'Profile Password',
    meta: {
      authOnly: true,
    },
    component: () => import(/* webpackChunkName: "profilePassword" */ '../pages/Profile/Password.vue'),
  },
];
