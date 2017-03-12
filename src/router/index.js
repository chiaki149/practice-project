import Vue from 'vue'
import Router from 'vue-router'
import ListItems from 'components/ListItems'
import InputItems from 'components/InputItems'

Vue.use(Router)

export default new Router({
  routes: [
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
