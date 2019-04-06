import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
