import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import Discover from './pages/Discover'

Vue.config.productionTip = false

Vue.use(VueResource).use(VueRouter)

const router = new VueRouter({
  // Nos URLs seront sous la forme http://lesite.com/contact au lieu de http://lesite.com/#/contact
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/creer-produit', component: CreateProduct },
    // Créer une nouvelle page /decouvrir où on déplacera le contenu de App.vue dans cette page
    { path: '/decouvrir', component: Discover },
    // Du h1 jusqu'au user-form. Attention de reprendre le template mais aussi les parties
    // du script.
    // Intégrer une navbar Bootstrap dans le App.vue
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
