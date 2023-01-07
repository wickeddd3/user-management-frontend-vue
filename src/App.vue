<template>
  <v-app class="v-app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  created () {
    this.getCurrent();
  },
  destroyed () {
    this.resetCurrent();
  },
  methods: {
    ...mapActions({
      getCurrent: 'authentication/current/get',
      resetCurrent: 'authentication/current/reset',
    }),
  },
};
</script>
