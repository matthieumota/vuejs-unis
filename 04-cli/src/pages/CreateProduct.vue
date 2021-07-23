<template>
    <div>
        <h1>Créer un produit</h1>

        {{ success }}
        {{ errors }}

        <form @submit.prevent="create">
            <label for="nom">Nom</label>
            <input id="nom" type="text" v-model="product.Nom" class="form-control">
            <label for="stock">Stock</label>
            <input id="stock" type="text" v-model="product.Stock" class="form-control">
            <label for="prix">Prix</label>
            <input id="prix" type="text" v-model="product.Prix" class="form-control">
            <label for="image">Image</label>
            <input id="image" type="text" v-model="product.Image" class="form-control">
            <button class="btn btn-primary">Créer</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: { Nom: null, Stock: null, Prix: null, Image: null },
            success: null,
            errors: null,
        }
    },
    methods: {
        create() {
            this.$http.post(
                'http://localhost:1337/produits',
                this.product
            ).then(
                response => this.success = response.data,
                response => this.errors = response.data.data.errors
            );
        },
    },
}
</script>
