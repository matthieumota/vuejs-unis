<template>
    <div>
        <form class="space-y-4" @submit.prevent="register">
            <input type="text" v-model="user.username" class="block" placeholder="Pseudo">
            <input type="text" v-model="user.email" class="block" placeholder="Email">
            <input type="password" v-model="user.password" class="block" placeholder="Mot de passe">

            <button class="px-6 py-2 bg-green-500 text-white hover:bg-green-600 rounded-lg">
                S'inscrire
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: { username: '', email: '', password: '' }
        }
    },
    methods: {
        register() {
            this.$http.post('http://localhost:1337/auth/local/register', this.user)
                .then(response => {
                    console.log(response.data)
                })
        }
    }
}
</script>
