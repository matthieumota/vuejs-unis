<template>
    <form @submit.prevent="save">
        <input type="text" placeholder="Prénom" v-model="user.firstName">
        <input type="text" placeholder="Nom" v-model="user.lastName">

        <button :disabled="success">
            <span v-if="!success">Sauvegarder</span>
            <span v-if="success">...</span>
        </button>
        <SuperButton :loading="success">Sauvegarder</SuperButton>
        <span v-if="success">
            L'utilisateur a bien été ajouté...
        </span>
    </form>
</template>

<script>
import SuperButton from './Button';

export default {
    components: { SuperButton },
    props: ['value'],
    data() {
        return {
            user: this.value,
            success: false,
        }
    },
    methods: {
        save() {
            // Object.assign({}, this.user) crée un clone de l'objet
            // {...this.user} fait la même chose
            // Cela évite d'ajouter plusieurs fois le même objet et de
            // tous les modifier en même temps
            // this.users.push({...this.user});
            this.$emit('saved', {...this.user});
            this.success = true;
            setTimeout(() => this.success = false, 2000);
        }
    }
}
</script>
