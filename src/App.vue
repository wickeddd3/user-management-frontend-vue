<template>
  <v-app class="v-app">
    <appbar></appbar>
    <sidebar></sidebar>
    <v-main class="full-height">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'App',
  components: {
    Appbar,
    Sidebar,
  },
};
</script>
