import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/foo', component: Foo, name: 'foo'},
  {path: '/bar', component: Bar, name: 'bar'}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
