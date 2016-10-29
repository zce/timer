import Vue from 'vue'
import VueRouter from 'vue-router'




import App from './app'
import routes from './routes'

import './assets/css/normalize.css'
import './assets/less/global.less'

Vue.use(VueRouter);

const router = new VueRouter({
  // http://router.vuejs.org/en/api/options.html
  mode: 'history',
  base: '/',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
