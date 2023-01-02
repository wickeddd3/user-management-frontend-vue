<template>
  <v-alert
    v-if="status"
    type="error"
    class="mb-8"
    prominent
    dense
  >
    <v-row align="center">
      <v-col class="grow">
        {{ message }}
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    status: {
      type: [ Number, String ],
      default: '',
    },
  },
  computed: {
    message () {
      return this.getErrorMessage();
    },
  },
  methods: {
    getErrorMessage () {
      const { status } = this;
      let message = '';
      switch (status) {
      case 422:
        message = 'These credentials do not match our records.';
        break;
      case 429:
        message = 'Too many attempts. Please try again later.';
        break;
      case 500:
        message = 'Error encountered on your request.';
        break;
      default:
        message = '';
      }
      return message;
    },
  },
};
</script>
