<template>
    <div :style="{ backgroundColor: (value >= max && max > 0) ? 'red' : 'transparent' }">
        <button @click="decrement" :disabled="value <= 0">-</button>
        {{ value }}
        <button @click="increment" :disabled="value >= max && max > 0">+</button>
    </div>
</template>

<script>
import { store } from '../main'

export default {
    props: {
        start: Number,
        max: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            value: 0,
        };
    },
    mounted() {
        this.value = this.start ? this.start : 0;
    },
    methods: {
        increment() {
            this.value++;
            this.$emit('update', 1);
            store.increment();
        },
        decrement() {
            this.value--;
            this.$emit('update', -1);
            store.decrement();
        },
    }
}
</script>
