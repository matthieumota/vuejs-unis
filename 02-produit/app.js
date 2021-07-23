var app = new Vue({
    el: '#app',
    data: {
        brand: 'Brand',
        name: 'Cat',
        image: '1.jpg',
        inStock: 10,
        price: 10.54,
        quantity: 1,
        features: [
            'Mignon', 'Affectueux', 'Gourmand',
        ],
        variations: [
            { color: 'red', price: 10.54, image: '1.jpg', inStock: 10 },
            { color: 'blue', price: 12.99, image: '2.jpg', inStock: 15 },
        ],
        selectedVariation: 'red',
    },
    computed: {
        title() {
            return this.brand + ' ' + this.name;
        },
        formattedPrice() {
            let formatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

            return formatter.format(this.price * this.quantity);
        },
    },
    methods: {
        changeVariation(variation) {
            this.image = variation.image;
            this.price = variation.price;
            this.selectedVariation = variation.color;
            this.inStock = variation.inStock;
        }
    }
});
