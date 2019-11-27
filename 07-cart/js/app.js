Vue.component('review-form', {
    template: `
        <form @submit.prevent="save">
            <select v-model="review.note" class="form-control">
                <option v-for="note in [0, 1, 2, 3, 4, 5]">
                    {{ note }}
                </option>
            </select>
            <textarea v-model="review.message" class="form-control"></textarea>
            <button class="btn btn-success">Publier</button>
        </form>
    `,
    data: function () {
        return {
            review: { note: 0, message: '' }
        }
    },
    methods: {
        save: function () {
            this.$emit('create-review', {...this.review});
        }
    }
});

Vue.component('product', {
    template: `
        <div class="mb-4">
            {{ product.name }}

            <div class="row my-4">
                <div class="col-lg-6">
                    <review-form @create-review="addReview($event)"></review-form>
                </div>
                <div class="col-lg-6">
                    <ul>
                        <li v-for="review in product.reviews">
                            {{ review.note }}
                            {{ review.message }}
                        </li>
                    </ul>
                </div>
            </div>

            <button class="btn btn-primary" @click="add">Ajouter</button>
            <button class="btn btn-danger" @click="remove">Supprimer</button>
        </div>
    `,
    props: ['product'],
    methods: {
        add: function () {
            this.$emit('add-to-cart', { product: this.product, type: 'add' });
        },
        remove: function () {
            this.$emit('add-to-cart', { product: this.product, type: 'remove' });
        },
        addReview: function (event) {
            this.product.reviews.push(event);
        }
    }

});

var app = new Vue({
    el: '#app',
    data: {
        cart: [],
        products: [
            { id: 1, name: 'Cat A', reviews: [] },
            { id: 2, name: 'Cat B', reviews: [] },
            { id: 3, name: 'Cat C', reviews: [] }
        ]
    },
    methods: {
        updateCart: function (event) {
            if ('add' === event.type) {
                this.cart.push(event.product);
            } else {
                this.cart = this.cart.filter(p => p != event.product);
            }
        }
    }
});
