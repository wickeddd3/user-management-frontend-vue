<template>
  <div>
    <appbar></appbar>
    <sidebar></sidebar>
    <v-main>
      <v-container
        v-bind="$attrs"
        class="app-content px-8"
        fluid
      >
        <breadcrumbs></breadcrumbs>
        <slot></slot>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Appbar from '@/components/Appbar/index.vue';
import Sidebar from '@/components/Sidebar/index.vue';
import Breadcrumbs from '@/components/Breadcrumbs';

export default {
  name: 'AppContent',
  components: {
    Appbar,
    Sidebar,
    Breadcrumbs,
  },
};
</script>
