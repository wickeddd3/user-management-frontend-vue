<template>
  <app-content>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-text-field
          label="Search..."
          prepend-inner-icon="mdi-magnify"
          clearable
          solo
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-btn>
          </template>
          Add User
        </v-tooltip>
      </v-col>
    </v-row>
    <v-data-table
      v-if="ready"
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="serverItemsLength"
      :footer-props="footerOptions"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
    <v-skeleton-loader
      v-else
      type="table"
    ></v-skeleton-loader>
  </app-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppContent from '@/components/App/AppContent';

export default {
  name: 'Users',
  components: {
    AppContent,
  },
  computed: {
    ...mapGetters({
      ready: 'users/list/ready',
      headers: 'users/list/headers',
      loading: 'users/list/value/loading',
      items: 'users/list/value/items',
      serverItemsLength: 'users/list/value/items/server/items/length',
      footerOptions: 'users/list/footer/options',
    }),
    options: {
      get () {
        return this.$store.getters['users/list/options'];
      },
      set (value) {
        this.$store.dispatch('users/list/options', value);
      },
    },
  },
  created () {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: 'users/list/get',
    }),
  },
};
</script>
