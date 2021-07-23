var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello VueJs',
        link: 'https://google.fr',
        success: true,
        contacts: [
            { name: 'Matthieu' },
            { name: 'Marina' },
            { name: 'Marina' },
        ],
        contactSelected: null,
        HTMLContent: '<h1>Test</h1>',
    },
    computed: {
        reverseMessage() {
            console.log('computed');
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        reverseMessage2() {
            console.log('method');
            return this.message.split('').reverse().join('');
        },
        close() {
            this.success = !this.success;
        },
        changeContact(contact) {
            this.contactSelected = contact;
        },
        showLink() {
            alert('Le lien est '+this.link);
        },
    }
});
