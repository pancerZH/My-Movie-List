const Vue = require('vue')
const ElementUI = require('element-ui')
const VueResource = require('vue-resource')
const VueRouter = require('vue-router')
import App from './App.vue'
import routers from './router/routers'


const router = new VueRouter({
  routes: routers
 })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
