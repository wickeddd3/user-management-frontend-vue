import Vue from 'vue';
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

function loadLocale (code) {
  return import(`vee-validate/dist/locale/${code}.json`).then(locale => {
    localize(code, locale);
  });
}

// Set default language
loadLocale('en');

// Install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
