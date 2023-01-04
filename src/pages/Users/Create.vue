<template>
  <app-content>
    <v-row>
      <v-col
        xl="5"
        lg="5"
        md="8"
        sm="12"
        xs="12"
      >
        <validation-observer v-slot="{ handleSubmit, invalid }" slim>
          <v-form
            ref="form"
            @submit.prevent="handleSubmit(createUser)"
          >
            <error-message
              :status="status"
              :errors="errors"
            ></error-message>
            <validation-provider
              v-slot="{ errors }"
              vid="name"
              name="Name"
              rules="required|max:254"
            >
              <v-text-field
                v-model="name"
                :error-messages="errors"
                label="Name"
                outlined
                dense
              ></v-text-field>
            </validation-provider>

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
                dense
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              vid="password"
              name="Password"
              rules="required|min:8"
            >
              <v-text-field
                v-model="password"
                :error-messages="errors"
                label="Password"
                outlined
                dense
              ></v-text-field>
            </validation-provider>

            <div class="d-flex justify-space-between align-center mt-4">
              <router-link
                to="/users"
                class="text-decoration-none font-weight-bold"
              >Back to users</router-link>

              <v-btn
                :disabled="invalid"
                :loading="loading"
                color="primary"
                type="submit"
              >
                Create user
              </v-btn>
            </div>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </app-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppContent from '@/components/App/AppContent';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'CreateUser',
  components: {
    AppContent,
    ErrorMessage,
  },
  computed: {
    ...mapGetters({
      loading: 'users/form/loading',
      status: 'users/form/status',
      errors: 'users/form/errors',
    }),
    name: {
      ...mapGetters({ get: 'users/form/value/name' }),
      ...mapActions({ set: 'users/form/value/name' }),
    },
    email: {
      ...mapGetters({ get: 'users/form/value/email' }),
      ...mapActions({ set: 'users/form/value/email' }),
    },
    password: {
      ...mapGetters({ get: 'users/form/value/password' }),
      ...mapActions({ set: 'users/form/value/password' }),
    },
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      resetForm: 'users/form/reset',
      createUser: 'users/create',
    }),
  },
};
</script>
