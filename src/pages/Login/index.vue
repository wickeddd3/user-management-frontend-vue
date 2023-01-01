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
              label="Password"
              outlined
            ></v-text-field>
          </validation-provider>

          <v-btn
            :disabled="invalid"
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

export default {
  name: 'Login',
  computed: {
    email: {
      ...mapGetters({ get: 'authentication/form/email' }),
      ...mapActions({ set: 'authentication/form/email' }),
    },
    password: {
      ...mapGetters({ get: 'authentication/form/password' }),
      ...mapActions({ set: 'authentication/form/password' }),
    },
  },
  methods: {
    ...mapActions({
      login: 'authentication/login',
    }),
  },
};
</script>
