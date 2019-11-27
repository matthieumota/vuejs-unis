import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
//import User from './components/User'
//import UserSettings from './components/UserSettings'
import ProductList from './components/ProductList'
import ProductShow from './components/ProductShow'
import ProductEdit from './components/ProductEdit'
import ProductDelete from './components/ProductDelete'

const User = () => import('./components/User')
const UserSettings = () => import('./components/UserSettings')

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
   .use(VueResource)

let Home = {
  template: `<div>Home</div>`
}

let Contact = {
  template: `<div>Contact</div>`
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/contact', component: Contact },
    { path: '/user/:name', component: User, children: [
      { path: 'settings', component: UserSettings }
    ] },
    { path: '/products', component: ProductList },
    { path: '/products/create', component: ProductEdit },
    { path: '/products/edit/:id', component: ProductEdit },
    { path: '/products/delete/:id', component: ProductDelete, props: true },
    { path: '/products/:id', component: ProductShow },
    { path: '*', component: Home }
  ]
})

new Vue({
  router,
  render: h => h(App),
  delimiters: ['${', '}']
}).$mount('#app')
