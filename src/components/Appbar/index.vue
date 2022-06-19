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
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
import Breakpoints from '@/mixins/Breakpoints';
import menu from './index';

export default {
  name: 'Appbar',
  data () {
    return {
      menu,
    };
  },
  mixins: [ Breakpoints ],
  methods: {
    ...mapActions({
      toggleShow: 'sidebar/show/toggle',
    }),
  },
};
</script>
