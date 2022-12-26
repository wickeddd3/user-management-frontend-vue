export default [
  {
    title: 'Dashboard',
    icon: 'mdi-chart-box-outline',
    route: '/dashboard',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'All Users',
    icon: 'mdi-account-group-outline',
    route: '/users',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'My Account',
    icon: 'mdi-account-cog-outline',
    hasSubmenu: true,
    children: [
      {
        title: 'Profile',
        icon: 'mdi-account-outline',
        route: '/profile',
      },
      {
        title: 'Log Out',
        icon: 'mdi-logout',
        route: '/logout',
      },
    ],
  },
];
