<template>
    <div>
        <form class="space-y-4" @submit.prevent="login">
            <input type="text" v-model="user.identifier" class="block" placeholder="Email">
            <input type="password" v-model="user.password" class="block" placeholder="Mot de passe">

            <button class="px-6 py-2 bg-green-500 text-white hover:bg-green-600 rounded-lg">
                Connexion
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: { identifier: '', password: '' }
        }
    },
    methods: {
        login() {
            this.$http.post('http://localhost:1337/auth/local', this.user)
                .then(response => {
                    this.$parent.user = response.data.user;
                })
        }
    }
}
</script>
