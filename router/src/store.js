import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Comme data sur un composant
    users: [
      { name: 'Matthieu' },
      { name: 'Toto' }
    ],
    cart: []
  },
  mutations: { // Comme methods sur un composant
    addUser (state, name) {
      state.users.push({ name })
    }
  },
  getters: { // Comme computed sur un composant
    usersCount (state) {
      return state.users.length
    }
  },
  actions: { // Comme methods sur un composant
    addUser (store, name) {
      setTimeout(() => {
        store.commit('addUser', name)
      }, 2000)
    }
  }
})
