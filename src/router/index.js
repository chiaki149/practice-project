import Vue from 'vue'
import Router from 'vue-router'
import title from 'components/CommonTitle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'title',
      component: title
    }
  ]
})
