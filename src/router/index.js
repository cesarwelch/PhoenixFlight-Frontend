import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
import home from '@/components/home'

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
  redirect: '/'
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