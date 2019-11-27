<template>
  <div>
    <div class="form-group">
      <label for="name">Nom</label>
      <input type="text" v-model="product.name" name="name" class="form-control">
    </div>
    <button class="btn btn-primary"
            @click="save"
            :disabled="null === product.name">Sauvegarder</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: { name: null }
    }
  },
  mounted () {
    let id = this.$route.params.id
    if (id) {
      this.$http.get('http://localhost:3000/products/'+id).then(
        response => this.product = response.data
      ).catch(
        error => {
          if (404 === error.status) {
            this.$router.push({ path: '/products' })
          }
        }
      )
    }
  },
  methods: {
    save () {
      let id = this.$route.params.id

      if (id) {
        this.$http.put('http://localhost:3000/products/'+id, this.product).then(
          () => this.$router.push({ path: '/products' })
        )

        return
      }

      this.$http.post('http://localhost:3000/products', this.product).then(
        () => this.$router.push({ path: '/products' })
      )
    }
  }
}
</script>
