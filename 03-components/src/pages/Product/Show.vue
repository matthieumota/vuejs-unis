<template>
    <div class="container">
        <div v-if="product">
            <h1>{{ product.name }}</h1>
        </div>

        <div v-if="notFound">
            <h1>404</h1>
        </div>

        <!-- <not-found :show="notFound" /> -->
        <!-- <http-error :status="500" /> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: null,
            notFound: false,
        };
    },
    mounted() {
        // localhost:3000/products/1
        this.$http.get(`http://localhost:3000/products/${this.$route.params.slug}`).then(
            response => this.product = response.data,
            response => {
                if (response.status === 404) {
                    this.notFound = true;
                }
            }
        );
    }
}
</script>
