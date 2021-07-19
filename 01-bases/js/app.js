var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello VueJS',
        link: 'https://www.google.fr',
        success: true,
        contacts: [
            { name: 'Matthieu' },
            { name: 'Marina' }
        ],
        content: '<h1>Un titre</h1>',
        attribute: 'href',
        firstName: 'Matthieu',
        lastName: 'Mota'
    },
    watch: {
        fullName: function (newValue, oldValue) {
            console.log(newValue, oldValue);
            if (newValue === 'Fiorella Mota') {
                this.success = false;
            } else {
                this.success = true;
            }
        },
    },
    mounted: function () {
        console.log('Composant is mounted');
    },
    methods: {
        close: function () {
            this.success = !this.success;
        },
        display: function () {
            alert(this.link);
        },
        reversedMessage: function () {
            console.log('method called');
            return this.message.split('').reverse().join('');
        }
    },
    computed: {
        messageReversed: function () {
            console.log('computed called');
            return this.message.split('').reverse().join('');
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                console.log(newValue);
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names.length > 1 ? names[names.length - 1] : '';
            },
        }
    }
});
