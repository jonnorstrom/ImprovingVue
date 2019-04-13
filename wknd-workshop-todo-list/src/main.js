import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'

import store from './store.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/foo', component: Foo, name: 'foo'},
  {path: '/bar', component: Bar, name: 'bar'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
