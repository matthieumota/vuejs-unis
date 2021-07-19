import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
// import MonComposant from './components/MonComposant'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// Vue.component('mon-composant', MonComposant)
Vue.use(VueResource).use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./pages/HomePage').default },
    { path: '/decouvrir', component: require('./pages/DiscoverPage').default },
    { path: '/produits', component: require('./pages/Product/Index').default },
    { path: '/produit/:slug', component: require('./pages/Product/Show').default },
    { path: '/produit/creer' },
    { path: '/produit/:id/editer' }
  ],
});

// On peut créer un store pour partager des données dans toute l'app
export const store = {
  state: {
    count: 5,
  },
  increment() {
    this.state.count++;
  },
  decrement() {
    this.state.count--;
  },
};

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
