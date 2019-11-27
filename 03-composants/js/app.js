Vue.component('composant', {
    template: `<div>
        Mon code {{ message }}
        {{ title }}
    </div>`,
    props: {
        title: {
            type: String,
            required: false,
            default: 'Un titre par défaut'
        }
    },
    data: function () {
        return {
            message: 'Hello composant'
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello application'
    }
});
