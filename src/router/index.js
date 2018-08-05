import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import home from '@/components/home'
Vue.use(Router)
axios.get('https://phoenixdawn.herokuapp.com/api/updateIds').then(response => {
  console.log(response)
  this.info = response
})
let routes = [{
  path: '/',
  name: 'Franklyn ♥ Maria Jose',
  component: home
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