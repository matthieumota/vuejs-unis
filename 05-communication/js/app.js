Vue.component('messager', {
    template: `<div @click="send">{{ message }}</div>`,
    props: ['message'],
    methods: {
        send: function () {
            this.$emit('send', { message: this.message });
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Pas de réponse'
    },
    methods: {
        receiveEvent: function (event) {
            this.message = event.message;
        }
    }
});
