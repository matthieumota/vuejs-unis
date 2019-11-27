import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')
