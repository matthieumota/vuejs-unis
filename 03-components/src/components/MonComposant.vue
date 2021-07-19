<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <input v-model="message">
    </div>
</template>

<script>
export default {
    // Une props est en lecture seule
    props: ['title'],
    data() {
        return {
            message: 'Mon composant',
        };
    },
}
</script>
