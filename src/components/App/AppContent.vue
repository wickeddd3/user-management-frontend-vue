<template>
  <v-container
    v-bind="$attrs"
    class="app-content px-8"
    fluid
  >
    <breadcrumbs></breadcrumbs>
    <slot></slot>
  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';

export default {
  name: 'AppContent',
  components: { Breadcrumbs },
};
</script>
