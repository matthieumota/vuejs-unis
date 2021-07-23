<template>
    <div>
        <h2>Liste de produits</h2>
        <div v-if="error" class="alert alert-danger">Erreur API</div>
        <div class="row">
            <div class="col-4" v-for="(product, index) in products" :key="index">
                <Product :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
    components: { Product },
    data() {
        return {
            products: [],
            error: false,
        }
    },
    mounted() {
        this.$http.get('http://localhost:1337/produits').then(
            response => this.products = response.data,
            () => this.error = true
        );
    },
}
</script>
