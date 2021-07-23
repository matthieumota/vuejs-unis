<template>
    <div class="grid grid-cols-2 gap-8">
        <div v-if="pizza">
            <img :src="'http://localhost:1337'+pizza.image[0].url" alt="">
        </div>
        <div v-if="pizza">
            <h1 class="font-bold text-xl">{{ pizza.nom }}</h1>
            <p class="text-gray-500">{{ pizza.prix }}</p>
        </div>

        <div>
            <h2 class="font-semibold text-lg mb-3">A propos de ce produit</h2>
            <p>{{ pizza.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizza: null,
            loading: true,
        }
    },
    mounted() {
        this.$http.get('http://localhost:1337/pizzas/'+this.$route.params.slug).then(response => {
            this.pizza = response.data
            this.loading = false
        })
    }
}
</script>
