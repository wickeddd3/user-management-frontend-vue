<template>
  <v-container
    v-bind="$attrs"
    class="app-content"
    fluid
  >
    <slot></slot>
  </v-container>
</template>

<script>
export default {
  name: 'AppContent',
};
</script>
