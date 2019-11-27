import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Comme data sur un composant
    users: [
      { name: 'Matthieu' },
      { name: 'Toto' }
    ],
    cart: [
      { id: 1, name: 'iPhone', price: 10, quantity: 2 },
      { id: 2, name: 'iPhone X', price: 20, quantity: 1 }
    ]
  },
  mutations: { // Comme methods sur un composant
    addUser (state, name) {
      state.users.push({ name })
    },
    addProductToCart (state, product) {
      product.price = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(10))) + Math.ceil(10);
      product.quantity = 1
      state.cart.push(product)
    },
    removeProductFromCart (state, product) {
      state.cart = state.cart.filter(p => p.id !== product.id)
    }
  },
  getters: { // Comme computed sur un composant
    usersCount (state) {
      return state.users.length
    },
    cartTotalPrice (state) {
      let total = 0;

      for (let product of state.cart.filter(p => p.price <= 10)) {
        total += product.price * product.quantity
      }

      return total
    },
    cartCheap (state) {
      return state.cart.filter(p => p.price <= 10)
    }
  },
  actions: { // Comme methods sur un composant
    addUser (store, name) {
      setTimeout(() => {
        store.commit('addUser', name)
      }, 2000)
    },
    addProductToCart (store, product) {
      store.commit('addProductToCart', product)
    },
    removeProductFromCart (store, product) {
      setTimeout(() => {
        store.commit('removeProductFromCart', product)
      }, 2000)
    }
  }
})
