Vue.component('mon-composant', {
    template: `
        <div>
            <h1>Hello {{ title }}</h1>
            <p>{{ name }}</p>
            <input type="text" v-model="name">
        </div>
    `,
    props: ['title'],
    data() {
        return {
            name: 'Component'
        };
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'App'
    }
});
