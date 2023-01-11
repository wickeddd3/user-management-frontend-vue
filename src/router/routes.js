export default [
  {
    path: '*',
    name: 'NotFound',
    meta: {
      authOnly: true,
    },
    component: () => import(/* webpackChunkName: "notFound" */ '../pages/NotFound.vue'),
  },
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
    meta: {
      authOnly: true,
      breadcrumb: 'Home',
    },
    component: {
      render (c) { return c('router-view'); },
    },
    children: [
      {
        path: '',
        meta: {
          authOnly: true,
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard/index.vue'),
      },
      {
        path: 'users',
        meta: {
          authOnly: true,
          breadcrumb: 'Users',
        },
        component: {
          render (c) { return c('router-view'); },
        },
        children: [
          {
            path: '',
            meta: {
              authOnly: true,
            },
            component: () => import(/* webpackChunkName: "users" */ '../pages/Users/index.vue'),
          },
          {
            path: 'create',
            name: 'Create',
            meta: {
              authOnly: true,
              breadcrumb: 'Create',
            },
            component: () => import(/* webpackChunkName: "createUser" */ '../pages/Users/Create.vue'),
          },
          {
            path: ':id/edit',
            name: 'Edit',
            meta: {
              authOnly: true,
              breadcrumb: 'Edit',
            },
            component: () => import(/* webpackChunkName: "editUser" */ '../pages/Users/Edit.vue'),
          },
        ],
      },
      {
        path: 'profile',
        meta: {
          authOnly: true,
          breadcrumb: 'Profile',
        },
        component: {
          render (c) { return c('router-view'); },
        },
        children: [
          {
            path: '',
            meta: {
              authOnly: true,
            },
            component: () => import(/* webpackChunkName: "profile" */ '../pages/Profile/index.vue'),
          },
          {
            path: 'password',
            name: 'Password',
            meta: {
              authOnly: true,
              breadcrumb: 'Password',
            },
            component: () => import(/* webpackChunkName: "password" */ '../pages/Profile/Password.vue'),
          },
        ],
      },
    ],
  },
];
