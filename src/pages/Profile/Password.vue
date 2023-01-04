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
            @submit.prevent="handleSubmit(updatePassword)"
          >
            <error-message
              :status="status"
              :errors="errors"
            ></error-message>
            <validation-provider
              v-slot="{ errors }"
              vid="currentPassword"
              name="Current Password"
              rules="required"
            >
              <v-text-field
                v-model="currentPassword"
                :error-messages="errors"
                label="Current Password"
                outlined
                dense
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              vid="newPassword"
              name="New Password"
              rules="required"
            >
              <v-text-field
                v-model="newPassword"
                :error-messages="errors"
                label="New Password"
                outlined
                dense
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              vid="passwordConfirmation"
              name="New Password"
              rules="required|confirmed:newPassword"
            >
              <v-text-field
                v-model="passwordConfirmation"
                :error-messages="errors"
                label="Confirm New Password"
                outlined
                dense
              ></v-text-field>
            </validation-provider>

            <div class="d-flex justify-space-between align-center mt-4">
              <router-link
                to="/profile"
                class="text-decoration-none font-weight-bold"
              >Back to profile</router-link>

              <v-btn
                :disabled="invalid"
                :loading="loading"
                color="primary"
                type="submit"
              >
                Update Password
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
  name: 'Password',
  components: {
    AppContent,
    ErrorMessage,
  },
  computed: {
    ...mapGetters({
      loading: 'authentication/security/loading',
      status: 'authentication/security/status',
      errors: 'authentication/security/errors',
    }),
    currentPassword: {
      ...mapGetters({ get: 'authentication/security/value/password/current' }),
      ...mapActions({ set: 'authentication/security/value/password/current' }),
    },
    newPassword: {
      ...mapGetters({ get: 'authentication/security/value/password' }),
      ...mapActions({ set: 'authentication/security/value/password' }),
    },
    passwordConfirmation: {
      ...mapGetters({ get: 'authentication/security/value/password/confirmation' }),
      ...mapActions({ set: 'authentication/security/value/password/confirmation' }),
    },
  },
  destroyed () {
    this.resetSecurity();
  },
  methods: {
    ...mapActions({
      resetSecurity: 'authentication/security/reset',
      updatePassword: 'authentication/security/update',
    }),
  },
};
</script>
