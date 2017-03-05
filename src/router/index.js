import Vue from 'vue'
import Router from 'vue-router'
import List from 'components/list'
import Input from 'components/Input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    }
  ]
})
