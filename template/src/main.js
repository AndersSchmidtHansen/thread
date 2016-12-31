import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './routes'
import store from './store/store'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

Vue.http.options.root = ''

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('../sw.js')
      .then(() => {
        console.log('Service Worker Registered')
      })
    }
  }
})
