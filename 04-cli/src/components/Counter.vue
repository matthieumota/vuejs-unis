<template>
    <div :class="{ red: value >= max }">
        <button @click="decrement" :disabled="value <= 0">-</button>
        {{ value }}
        <button @click="increment" :disabled="value >= max">+</button>
    </div>
</template>

<script>
export default {
    props: ['start', 'max'],
    data() {
        return {
            value: this.start ? this.start : 0,
        };
    },
    methods: {
        increment() {
            this.value++;
            this.$emit('count', 1);
        },
        decrement() {
            this.value--;
            this.$emit('count', -1);
        },
    },
}
</script>

<style scoped>
.red {
    background-color: red;
    color: #fff;
    display: inline-block;
}
</style>
