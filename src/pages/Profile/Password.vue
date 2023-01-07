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
            <v-card>
              <v-card-title class="body-1 font-weight-bold">Profile Password</v-card-title>
              <v-card-text class="pt-6">
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
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="pa-4">
                <v-btn
                  to="/profile"
                  color="primary"
                  text
                  exact
                >Back to profile</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="invalid"
                  :loading="loading"
                  color="primary"
                  type="submit"
                  class="px-4"
                >
                  Update Password
                </v-btn>
              </v-card-actions>
            </v-card>
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
