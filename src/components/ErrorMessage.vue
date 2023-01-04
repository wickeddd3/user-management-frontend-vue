<template>
  <v-alert
    v-if="hasErrors || message"
    type="error"
    class="mb-8"
    prominent
    dense
  >
    <p v-if="message" class="caption ma-0">{{ message }}</p>
    <div
      v-for="(item, key, index) in errors"
      :key="index"
    >
      <p class="caption font-weight-bold ma-0">
        {{ startCase(key) }}
      </p>
      <p
        v-for="error in item"
        :key="error"
        class="caption ma-0"
      >
        {{ error }}
      </p>
    </div>
  </v-alert>
</template>

<script>
import { startCase } from 'lodash';

export default {
  name: 'ErrorMessage',
  props: {
    errors: {
      type: Object,
      default: () => {},
    },
    status: {
      type: [ Number, String ],
      default: '',
    },
  },
  computed: {
    errorMessages () {
      return Object.entries(this.errors);
    },
    hasErrors () {
      return this.errorMessages.length;
    },
    message () {
      return this.getErrorMessage();
    },
  },
  methods: {
    startCase (error) {
      return startCase(error);
    },
    getErrorMessage () {
      let message = '';
      switch (this.status) {
      case 429:
        message = 'Too many attempts. Please try again later.';
        break;
      case 500:
        message = 'Error encountered after sending your request.';
        break;
      default:
        message = '';
      }
      return message;
    },
  },
};
</script>
