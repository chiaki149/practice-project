import Vue from 'vue'
import Router from 'vue-router'
import Basic from 'components/Basic'
import ListItems from 'components/ListItems'
import InputItems from 'components/InputItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/listitems',
      name: 'listitems',
      component: ListItems
    },
    {
      path: '/inputitems',
      name: 'inputitems',
      component: InputItems
    }
  ]
})
