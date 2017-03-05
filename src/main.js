// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './assets/base.css'
import './assets/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App: require('./App.vue'),
    List: require('./components/List.vue'),
    Input: require('./components/Input.vue')
  }
})
