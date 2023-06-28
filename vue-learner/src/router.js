import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('./views/Table.vue')
    }
  ]
})
