<template>
  <app-content>
    <v-row justify="space-between" class="mb-2">
      <v-col cols="auto">
        <v-text-field
          label="Search..."
          prepend-inner-icon="mdi-magnify"
          hide-details
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
              @click="downloadTemplate"
            >
              <v-icon>mdi-file-download-outline</v-icon>
            </v-btn>
          </template>
          Download Template
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="downloadUsers"
            >
              <v-icon>mdi-tray-arrow-down</v-icon>
            </v-btn>
          </template>
          Download Users
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="$refs.fileUpload.click()"
            >
              <v-icon>mdi-tray-arrow-up</v-icon>
            </v-btn>
            <input
              ref="fileUpload"
              type="file"
              class="d-none"
              accept="*.text/*.txt/*.csv/*.xls/*.xlsx"
              @change.prevent="upload"
            >
          </template>
          Import Template
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              to="/users/create"
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
      :server-items-length="total"
      :footer-props="footerOptions"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:item.edit="{ item }">
        <v-btn
          :to="`/users/${item.id}/edit`"
          icon
          link
          exact
        >
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn
          icon
          @click="deleteUser(item.id)"
        >
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
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
      loading: 'users/list/loading',
      headers: 'users/list/headers',
      items: 'users/list/value/items',
      total: 'users/list/value/items/total',
      footerOptions: 'users/list/options/footer',
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
  destroyed () {
    this.resetList();
  },
  methods: {
    ...mapActions({
      getList: 'users/list/get',
      deleteUser: 'users/delete',
      resetList: 'users/list/reset',
      downloadTemplate: 'users/template',
      downloadUsers: 'users/download',
      uploadTemplate: 'users/upload',
    }),
    upload (event) {
      const { target: { files } } = event;
      this.uploadTemplate(files[0]);
      this.$refs.fileUpload.value = null;
    },
  },
};
</script>
