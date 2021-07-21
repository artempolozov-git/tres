import Vue from 'vue'
import App from './App.vue'
import router from './router'

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

const WOW = require('wow.js');
new WOW({ live: true, mobile: false}).init();
console.log(WOW);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


