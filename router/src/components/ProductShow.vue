<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: null
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/products/' + this.$route.params.id).then(
      response => this.product = response.data
    ).catch(
      error => {
        if (404 === error.status) {
          this.$router.push({ path: '/products' })
        }
      }
    )
  }
}
</script>
