<template>
  <div v-if="product">
    Delete {{ product.name }} ? <br />

    <button class="btn btn-info" @click="$router.go(-1)">Non</button>
    <button class="btn btn-danger" @click="remove">Oui</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      product: null
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/products/'+this.id).then(
      response => this.product = response.data
    )
  },
  methods: {
    remove () {
      this.$http.delete('http://localhost:3000/products/'+this.id).then(
        () => this.$router.push({ path: '/products' })
      )
    }
  }
}
</script>
