<template>
  <v-breadcrumbs
    :items="breadcrumbs"
    divider="/"
    class="px-0"
  ></v-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbs () {
      const { matched } = this.$route;
      const intialRoutes = [{
        text: 'Home',
        to: '/',
        exact: true,
      }];
      const matchedRoutes = (matched || []).map(item => ({
        text: item.name,
        to: item.path,
        exact: true,
      }));
      return [ ...intialRoutes, ...matchedRoutes ];
    },
  },
};
</script>
