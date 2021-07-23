<template>
    <div class="card">
        <img class="card-img-top img-fluid" :src="'http://localhost:1337'+product.Image.url" :alt="product.Nom" v-if="product.Image">
        <div class="card-body">
            <h5 class="card-title">{{ product.Nom }}</h5>
            <p class="card-text">{{ product.Prix }} €</p>
            <button class="btn btn-primary" @click="bus.$emit('add-to-cart', product)">
                Ajouter au panier
            </button>
        </div>
    </div>
</template>

<script>
import EventBus from '../bus'

export default {
    props: ['product'],
    data() {
        return {
            bus: EventBus
        }
    },
}
</script>
