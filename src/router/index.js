import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
import home from '@/components/home'
import response from '@/components/response'

Vue.use(Router)
let routes = [{
  path: '/',
  name: 'Franklyn ♥ Maria Jose',
  component: home
}, {
  path: '/guest/:id',
  name: 'Franklyn ♥ Maria Jose ',
  component: home
}, {
  path: '*',
  component: home
}, {
  name: 'List',
  path: '/guest/responses/10',
  component: response
}]

let router = new Router({
  mode: 'history',
  routes: routes
})
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router