<template>
    <div>
        <span v-if="loading">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-spin mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </span>

        <div class="grid grid-cols-2 gap-4">
            <div v-for="pizza in pizzas" :key="pizza.id" class="transform hover:-translate-y-4 transition duration-500">
                <div class="border border-gray-300 rounded-md shadow-md cursor-pointer">
                    <router-link :to="'/pizzas/'+pizza.id">
                        <img :src="'http://localhost:1337' + pizza.image[0].url"
                            :alt="pizza.nom"
                            class="rounded-t-md h-64 w-full object-cover" :ref="'pizza-'+pizza.id">
                        <div class="flex -space-x-2 -mt-5 justify-center">
                            <img class="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-white"
                                v-for="image in pizza.image" :key="image.id"
                                @click.prevent="switchImage(image.url, 'pizza-'+pizza.id)"
                                :src="'http://localhost:1337' + image.url" alt="">
                        </div>
                        <div class="p-4">
                            <h2 class="text-xl font-bold">{{ pizza.nom }}</h2>
                            <p class="text-gray-500">{{ formatPrice(pizza.prix) }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <router-link to="/pizzas/test">Test</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizzas: [],
            loading: true,
        }
    },
    methods: {
        formatPrice(price) {
            let formatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
            return formatter.format(price)
        },
        switchImage(url, pizza) {
            this.$refs[pizza][0].src = 'http://localhost:1337' + url
        }
    },
    mounted() {
        this.$http.get('http://localhost:1337/pizzas').then(response => {
            setTimeout(() => {
                this.pizzas = response.data
                this.loading = false
            }, 300)
        })
    },
}
</script>
