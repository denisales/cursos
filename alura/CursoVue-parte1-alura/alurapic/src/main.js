import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import VueRouter from 'vue-router'
import VeeValidate, { Validator } from 'vee-validate';
import msg from './pt_BR';
import { routes } from './routes';
import './directives/Transform';

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Validator.localize('pt_BR', msg);

Vue.http.options.root = 'http://localhost:3000'

const router = new VueRouter({
  routes,
  mode: 'history'
 })

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
