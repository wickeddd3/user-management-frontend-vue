<template>
  <v-app-bar
    app
    clipped-right
    flat
    light
    height="56"
  >
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="toggleShow()"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn icon class="mr-4">
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <v-menu
      left
      bottom
      nudge-bottom="40"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          role="button"
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar size="45">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" width="40px">
          </v-avatar>
        </div>
      </template>

      <v-list dense>
        <v-list-item to="/profile" link>
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import Breakpoints from '@/mixins/Breakpoints';

export default {
  name: 'Appbar',
  mixins: [ Breakpoints ],
  methods: {
    ...mapActions({
      toggleShow: 'sidebar/show/toggle',
      logout: 'authentication/logout',
    }),
  },
};
</script>
