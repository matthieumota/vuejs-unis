Vue.component('counter', {
    template: `<div :style="{ backgroundColor: (value >= max) ? 'red' : 'transparent' }">
        <button @click="decrement" class="btn btn-info" :disabled="value <= 0">-</button>
        {{ value }}
        <button @click="increment" class="btn btn-info" :disabled="value >= max">+</button>
    </div>`,
    props: ['start', 'max'],
    data: function () {
        return {
            value: this.start ? this.start : 0
        }
    },
    methods: {
        decrement: function () {
            this.value--;
        },
        increment: function () {
            this.value++;
        }
    }
});

var app = new Vue({
    el: '#app'
});
