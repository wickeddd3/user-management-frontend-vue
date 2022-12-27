export default {
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
    headers: [
      {
        text: 'First Name',
        align: 'start',
        sortable: true,
        value: 'firstName',
      },
      {
        text: 'Last Name',
        align: 'start',
        sortable: true,
        value: 'lastName',
      },
      {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email',
      },
    ],
    value: {
      loading: false,
      items: [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@gmail.com',
        },
        {
          firstName: 'Michael',
          lastName: 'Jordan',
          email: 'jordan23@gmail.com',
        },
      ],
    },
    options: {
      itemsPerPage: 10,
      page: 1,
      sortBy: [ 'firstName' ],
    },
    footerOptions: {
      'items-per-page-options': [ 10, 20, 30, 40, 50 ],
    },
  },
};
