/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import VueToastr from 'vue-toastr';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router/index.js';
import './assets/css/tailwind.css';

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-center',
  defaultPreventDuplicates: true,
  defaultTimeout: 0,
});

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#auth-app',
    render: (h) => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
