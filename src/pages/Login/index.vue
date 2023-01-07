<template>
  <v-row
    justify="center"
    class="mt-15"
  >
    <v-col
      xl="4"
      lg="5"
      md="8"
      sm="8"
      xs="12"
    >
      <validation-observer v-slot="{ handleSubmit, invalid }" slim>
        <v-form
          ref="form"
          class="px-8"
          @submit.prevent="handleSubmit(login)"
        >
          <h1 class="my-4">Login</h1>
          <error-message
            :status="status"
            :errors="errors"
          ></error-message>
          <validation-provider
            v-slot="{ errors }"
            vid="email"
            name="Email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="Email"
              outlined
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            vid="password"
            name="Password"
            rules="required"
          >
            <v-text-field
              v-model="password"
              :error-messages="errors"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              label="Password"
              outlined
              @click:append="show = !show"
            ></v-text-field>
          </validation-provider>

          <v-btn
            :disabled="invalid"
            :loading="loading"
            color="primary"
            class="mt-2 py-8 text-h6 font-weight-bold"
            type="submit"
            large
            block
          >
            Login
          </v-btn>
        </v-form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'Login',
  components: { ErrorMessage },
  data () {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters({
      loading: 'authentication/form/loading',
      status: 'authentication/form/status',
      errors: 'authentication/form/errors',
    }),
    email: {
      ...mapGetters({ get: 'authentication/form/value/email' }),
      ...mapActions({ set: 'authentication/form/value/email' }),
    },
    password: {
      ...mapGetters({ get: 'authentication/form/value/password' }),
      ...mapActions({ set: 'authentication/form/value/password' }),
    },
  },
  created () {
    this.reset();
  },
  methods: {
    ...mapActions({
      login: 'authentication/login',
      reset: 'authentication/form/reset',
    }),
  },
};
</script>
