export default {
  computed: {
    isDesktop () {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
