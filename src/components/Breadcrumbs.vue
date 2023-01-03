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
      return (matched || [])
        .filter(item => item.meta.breadcrumb)
        .map(item => ({
          text: item.meta.breadcrumb,
          to: item.path || '/',
          exact: true,
        }));
    },
  },
};
</script>
