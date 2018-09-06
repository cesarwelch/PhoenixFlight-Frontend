// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import printJS from 'print-js'

Vue.use(printJS)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Maps addon
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-oEyU88bRR6xcbV1gI_Cahc8ugKC_JPE', // prod AIzaSyCAwABS_h8FDkLZuBsST1PcC_o-oVkVguM
    libraries: 'places'
  }
})

// Components

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
