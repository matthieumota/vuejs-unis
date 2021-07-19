<template>
    <form @submit.prevent="save">
        <slot />
        <input type="text" v-model="user.firstName">
        <input type="text" v-model="user.lastName">
        <button>Sauvegarder</button>
        <slot name="success" v-if="success" />
    </form>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            user: Object.assign({}, this.value),
            success: false,
        };
    },
    methods: {
        save() {
            console.log(this.user);
            this.$emit('input', {...this.user});
            this.success = true;
            setTimeout(() => this.success = false, 2000);
        }
    }
}
</script>
