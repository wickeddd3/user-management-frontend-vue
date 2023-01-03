<template>
  <v-snackbar
    v-model="show"
    top
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        text
        v-bind="attrs"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Snackbar',
  computed: {
    ...mapGetters({
      text: 'snackbar/text',
    }),
    show: {
      ...mapGetters({ get: 'snackbar/show' }),
      ...mapActions({ set: 'snackbar/show' }),
    },
  },
};
</script>
