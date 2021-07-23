import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter).use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('./pages/Home') },
    { path: '/pizzas', component: () => import('./pages/pizzas/Index') },
    { path: '/pizzas/:slug', component: () => import('./pages/pizzas/Show') },
    { path: '/panier' },
    { path: '/register', component: () => import('./pages/Register') },
    { path: '/login', component: () => import('./pages/Login') },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
