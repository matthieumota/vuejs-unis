var app = new Vue({
    el: '#app',
    data: {
        product: {
            name: 'Cat',
            brand: 'Brand',
            inStock: true,
            features: ['Mignon', 'Affectueux', 'Gourmand'],
            variants: [
                { color: 'blue', image: 'https://www.mesopinions.com/public/img/petition/petition-img-72960-fr.png', price: 10 },
                { color: 'red', image: 'https://jardinage.lemonde.fr/images/dossiers/2018-10/sevrage-chaton-141629.jpg', price: 12 }
            ],
            selectedVariant: 0,
            quantity: 1
        }
    },
    methods: {
        changeVariant: function (index) {
            this.product.selectedVariant = index;
        }
    },
    computed: {
        title: function () {
            return this.product.brand + ' ' + this.product.name;
        },
        price: function () {
            return this.product.variants[this.product.selectedVariant].price;
        }
    }
});
