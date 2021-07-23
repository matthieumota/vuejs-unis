<template>
  <div class="container">
    <!-- <span v-sticky:top="'red'"></span>
    <span v-sticky:bottom="'green'"></span> -->
    <span v-sticky:left="'blue'"></span>
    <!-- <span v-sticky:right="'yellow'"></span> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Vue</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" exact-active-class="active" to="/">Accueil</router-link>
          <router-link class="nav-link" exact-active-class="active" to="/creer-produit">Créer un produit</router-link>
          <router-link class="nav-link" exact-active-class="active" to="/decouvrir">Découvrir</router-link>
        </div>

        <div>
          <h6 class="mb-0"> Panier:
            <transition name="animate" appear enter-active-class="animated tada" leave-active-class="animated bounceOutRight" mode="out-in">
              <span v-if="cartQuantity > 0" key="visible" class="d-inline-block">( {{ cartQuantity }} )</span>
              <span v-else class="d-inline-block" key="invisible">Pas de produits</span>
            </transition>
          </h6>
          <transition-group name="fade" tag="ul" class="mb-0 cart">
            <li v-for="(item, index) in cart" :key="index">
              {{ item.product.Nom }} ( {{ item.quantity }} )
              <button @click="deleteItem(index)">X</button>
            </li>
          </transition-group>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import EventBus from './bus'

export default {
  data() {
    return {
      cart: [],
    }
  },
  directives: {
    sticky(el, binding) {
      console.log(binding);
      el.style.display = 'inline-block';
      el.style.width = '100%';
      el.style.height = '50px';
      el.style.backgroundColor = binding.value;
      el.style.position = 'fixed';

      if (binding.arg === 'top') {
        el.style.top = 0;
      } else if (binding.arg === 'bottom') {
        el.style.bottom = 0;
      } else if (binding.arg === 'left' || binding.arg === 'right') {
        el.style.width = '50px';
        el.style.height = '100%';
      }

      if (binding.arg === 'right') {
        el.style.right = 0;
      } else {
        el.style.left = 0;
      }
    }
  },
  mounted() {
    EventBus.$on('add-to-cart', this.updateCart);
  },
  computed: {
    cartQuantity() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
  },
  methods: {
    updateCart(product) {
      // On vérifie si le produit est déjà présent dans le panier
      let itemExists = this.cart.find(item => item.product === product);
      // Dans ce cas, on augmente sa quantité sans ajouter le produit
      if (itemExists) {
        itemExists.quantity++;
      } else { 
        // Sinon on push le produit
        this.cart.push({ product, quantity: 1 });
      }
    },
    deleteItem(index) {
      // On supprime l'index 0 par exemple du tableau
      this.cart.splice(index, 1);
    }
  }
}
</script>

<style>
  h6:hover + .cart, .cart:hover {
    display: block;
  }

  .cart {
    position: absolute;
    padding: 0;
    z-index: 1;
    background-color: #f8f9fa;
    list-style: none;
    right: 0;
    max-width: 300px;
    padding: 15px;
    display: none;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .slide-enter-active {
    transition: all .3s;
  }

  .slide-leave-active {
    transition: all .9s;
  }

  .slide-enter, .slide-leave-to {
    transform: rotate(45deg);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
