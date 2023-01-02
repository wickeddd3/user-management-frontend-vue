<template>
  <app-content>
    <v-row>
      <v-col
        xl="6" lg="6"
        md="8"
        sm="12" xs="12"
      >
        <validation-observer v-slot="{ handleSubmit, invalid }" slim>
          <v-form
            ref="form"
            @submit.prevent="handleSubmit(updateCurrent)"
          >
            <validation-provider
              v-slot="{ errors }"
              vid="name"
              name="Name"
              rules="required|max:100"
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

            <div class="d-flex justify-space-between align-center mt-4">
              <router-link
                to="/profile/password"
                class="text-decoration-none font-weight-bold"
              >Update password</router-link>

              <v-btn
                :disabled="invalid"
                :loading="loading"
                color="primary"
                type="submit"
              >
                Save Changes
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

export default {
  name: 'Profile',
  components: {
    AppContent,
  },
  computed: {
    ...mapGetters({
      loading: 'authentication/current/loading',
    }),
    name: {
      ...mapGetters({ get: 'authentication/current/value/name' }),
      ...mapActions({ set: 'authentication/current/value/name' }),
    },
    email: {
      ...mapGetters({ get: 'authentication/current/value/email' }),
      ...mapActions({ set: 'authentication/current/value/email' }),
    },
  },
  created () {
    this.getCurrent();
  },
  destroyed () {
    this.resetCurrent();
  },
  methods: {
    ...mapActions({
      getCurrent: 'authentication/current/get',
      resetCurrent: 'authentication/current/reset',
      updateCurrent: 'authentication/current/update',
    }),
  },
};
</script>
