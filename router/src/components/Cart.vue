<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tr v-for="product in cart" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <button @click="removeProductFromCart(product)">Supprimer le produit</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapState(['cart']),
    ...mapGetters({
      cart: 'cartCheap'
    })
  },
  methods: {
    ...mapActions(['removeProductFromCart'])
  }
}
</script>
