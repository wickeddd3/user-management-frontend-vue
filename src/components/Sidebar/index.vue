<template>
  <v-navigation-drawer
    :value="show"
    :mini-variant.sync="mini"
    :permanent="isDesktop && show"
    :stateless="isMobile"
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar tile>
        <img src="./../../assets/logo.png">
      </v-list-item-avatar>
      <v-list-item-title>VueApp</v-list-item-title>
      <v-btn icon @click.stop="toggleMini()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-list dense>
      <template v-for="item in menu">
        <v-list-group
          v-if="item.hasSubmenu"
          :key="item.title"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <v-list dense>
            <v-list-item
              v-for="item in item.children"
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
        </v-list-group>
        <v-list-item
          v-else
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
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Breakpoints from '@/mixins/Breakpoints';
import menu from './index';

export default {
  name: 'Sidebar',
  data () {
    return {
      menu,
    };
  },
  mixins: [ Breakpoints ],
  computed: {
    ...mapGetters({
      show: 'sidebar/show',
    }),
    mini: {
      ...mapGetters({ get: 'sidebar/mini' }),
      ...mapActions({ set: 'sidebar/mini/toggle' }),
    },
  },
  methods: {
    ...mapActions({
      toggleMini: 'sidebar/mini/toggle',
    }),
  },
};
</script>
