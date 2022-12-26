<template>
  <app-content class="px-8">
    <v-breadcrumbs
      :items="breadcrumbs"
      divider="/"
      class="px-0"
    ></v-breadcrumbs>
    <v-row>
      <v-col
        xl="6" lg="6"
        md="8"
        sm="12" xs="12"
      >
        <validation-observer v-slot="{ handleSubmit, invalid }" slim>
          <v-form
            ref="form"
            @submit.prevent="handleSubmit(submit)"
          >
            <validation-provider
              v-slot="{ errors }"
              vid="firstName"
              name="First Name"
              rules="required|max:100"
            >
              <v-text-field
                v-model="firstName"
                :error-messages="errors"
                label="First Name"
                outlined
                dense
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              vid="lastName"
              name="Last Name"
              rules="required"
            >
              <v-text-field
                v-model="lastName"
                :error-messages="errors"
                label="Last Name"
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

            <v-btn
              :disabled="invalid"
              color="primary"
              class="mt-2"
              type="submit"
            >
              Save Changes
            </v-btn>
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
      breadcrumbs: 'users/breadcrumbs',
    }),
    firstName: {
      ...mapGetters({ get: 'users/current/value/firstname' }),
      ...mapActions({ set: 'users/current/value/firstname' }),
    },
    lastName: {
      ...mapGetters({ get: 'users/current/value/lastname' }),
      ...mapActions({ set: 'users/current/value/lastname' }),
    },
    email: {
      ...mapGetters({ get: 'users/current/value/email' }),
      ...mapActions({ set: 'users/current/value/email' }),
    },
  },
  created () {
    this.getCurrent();
  },
  methods: {
    ...mapActions({
      getCurrent: 'users/current/get',
    }),
    submit () {
      console.log('submitted');
    },
  },
};
</script>
