Vue.component('user-form', {
    template: `<form @submit.prevent="save">
        <input type="text" class="form-control" v-model="user.firstname">
        <input type="text" class="form-control" v-model="user.lastname">
        <button class="btn btn-primary">Sauvegarder</button>
    </form>`,
    props: ['value'],
    data: function () {
        return {
            user: JSON.parse(JSON.stringify(this.value))
        }
    },
    methods: {
        save: function () {
            this.$emit('input', {...this.user});
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        user: {
            firstname: '',
            lastname: ''
        }
    },
    methods: {
        log: function (event) {
            console.log(event.firstname);
        }
    }
});
