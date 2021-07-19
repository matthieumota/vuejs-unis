<template>
    <div class="container">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2">
        <div class="d-flex justify-content-between align-items-center mt-4">
            <h1>Produits</h1>
            <button class="btn btn-primary"
                @click="showCreateForm = !showCreateForm">
                Créer un produit
            </button>
            <button @click="shuffle">Trier</button>
        </div>

        <transition name="animated"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp" mode="out-in">
            <div class="row" v-if="showCreateForm" key="visible">
                <form class="col-3" @submit.prevent="createProduct">
                    <label for="name">Nom</label>
                    <input type="text" id="name" class="form-control mb-2"
                        :class="{ 'is-invalid': productNameValid }"
                        v-model="product.name">
                    <div class="invalid-feedback"
                        v-if="productNameValid">
                        Le nom doit faire 5 caractères.
                    </div>

                    <button class="btn btn-primary" :disabled="!productValid">
                        Créer
                    </button>
                </form>
            </div>
        </transition>

            <transition-group tag="div" name="fade" class="row mt-4" v--else key="invisible">
                <!-- Sur chaque produit, on va écouter le double clic. A ce moment là, on affiche un champ
                contenant le nom du produit à modifier. On peut modifier le nom et en appuyant sur Entrée, on peut mettre à jour.
                A ce moment là, on envoie une requête en PUT à l'api et on cache le champ. On ne peut éditer qu'un produit à la fois. -->
                <div class="col-3" v-for="product in products" :key="product.id" @dblclick="startEdit(product)">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div v-if="productBeingEdited === product">
                                <input type="text" v-model="productBeingEdited.name" @keyup.enter="editProduct" ref="input">
                            </div>
                            <h2 class="card-title" v-else>{{ product.name }}</h2>

                            <router-link class="btn btn-primary" :to="`/produit/${product.id}`">
                                Voir le produit
                            </router-link>

                            <!-- Créer une action pour supprimer le produit
                                On appelle une méthode au clic qui envoie
                                une requête HTTP en delete. -->
                            <button class="btn btn-danger"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                @click="productBeingDeleted = product">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </transition-group>
        <!-- </transition> -->

        <div v-if="!loaded">
            Chargement en cours...
            <div class="spinner-border"></div>
        </div>

        <div v-if="error" class="alert alert-danger">
            Il y a une erreur sur l'API...
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Supprimer le produit</h5>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Êtes-vous sûr ?
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button class="btn btn-primary" @click="deleteProduct" data-bs-dismiss="modal">
                            Confirmer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            loaded: false,
            error: false,
            showCreateForm: false,
            product: { name: '' },
            productBeingEdited: null,
            productBeingDeleted: null,
        }
    },
    updated() {
        if (this.$refs.input) {
            // this.$refs.input[0].focus();
        }
    },
    mounted() {
        this.$http.get('http://localhost:3000/products').then(response => {
            console.log(response);
            this.products = response.data;
            this.loaded = true;
        }, response => {
            console.log(response);
            this.error = this.loaded = true;
        });
    },
    computed: {
        productNameValid() {
            return this.product.name.length > 0
                && this.product.name.length < 5;
        },
        productValid() {
            if (this.product.name.length < 5) {
                return false;
            }

            return true;
        },
    },
    methods: {
        createProduct() {
            this.$http.post(
                'http://localhost:3000/products',
                this.product
            ).then(
                (response) => this.products.push(response.data),
                () => this.errors = [{name: 'ERROR'}],
            )
        },
        startEdit(product) {
            this.productBeingEdited = product;
            this.$nextTick(() => {
                this.$refs.input[0].focus();
            });
        },
        editProduct() {
            this.$http.put(
                `http://localhost:3000/products/${this.productBeingEdited.id}`,
                this.productBeingEdited
            ).then((response) => {
                let index = this.products.findIndex(p => p.id === this.productBeingEdited.id);
                this.products.splice(index, 1, response.data);
                this.productBeingEdited = null;
            });
        },
        deleteProduct() {
            // if (confirm('Sûr ?')) {
                this.$http.delete(`http://localhost:3000/products/${this.productBeingDeleted.id}`).then(() => {
                    this.products = this.products.filter(p => p.id !== this.productBeingDeleted.id);
                    this.productBeingDeleted = null;
                });
            // }
        },
        shuffle: function () {
            this.products.sort(() => Math.random() - 0.5);
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all .3s;
}

.slide-leave-active {
  transition: all .9s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100px);
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

.fade-move {
  transition: transform 1s;
}
</style>
