<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <!--
            http://localhost:3000/products
            Requête AJAX pour récupèrer tous les produits -->
          <div class="text-center mt-5" v-if="loading">
            <div class="spinner-border"></div>
          </div>
          <ul v-else>
            <li class="mb-3" v-for="product in products" :key="product.id">
              <span @click="select(product)">{{ product.name }}</span>
              <!-- Requête AJAX pour supprimer un produit -->
              <button class="btn btn-danger ml-5" @click="remove(product)">Supprimer</button>
            </li>
          </ul>
          <button class="btn btn-primary" @click="refresh">Refresh</button>
        </div>
        <div class="col-6">
          <!-- Requête AJAX pour créer un produit -->
          <label for="create">Créer un produit</label>
          <input type="text" class="form-control" id="create" v-model="created.name">
          <button class="btn btn-primary" @click="create" :disabled="loading">Ajouter le produit</button>
        </div>
      </div>
      <!-- Requête AJAX pour récupèrer un produit au clic sur la liste -->
      <h1 v-if="selected">{{ selected.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      selected: null,
      created: { name: null },
      loading: true
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/products').then(
      response => {
        this.products = response.data
        this.loading = false
      }
    )
  },
  methods: {
    select (product) {
      this.$http.get('http://localhost:3000/products/' + product.id).then(
        response => this.selected = response.data
      )
    },
    create () {
      this.loading = true
      this.$http.post('http://localhost:3000/products', this.created).then(
        response => {
          this.loading = false
          this.products.push(response.data)
        }        
      )
    },
    remove (product) {
      this.loading = true
      this.$http.delete('http://localhost:3000/products/' + product.id).then(
        () => {
          this.products = this.products.filter(p => p.id !== product.id)
          this.loading = false
        }
      )
    },
    refresh () {
      this.loading = true
      this.$http.get('http://localhost:3000/products').then(
        response => {
          this.products = response.data
          this.loading = false
        }
      )
    }
  }
}
</script>

<style></style>
