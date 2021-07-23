<template>
    <button :disabled="loading">
        <slot v-if="!loading" />
        <span v-if="loading">
            ...
        </span>
    </button>
</template>

<script>
export default {
    props: ['loading'],
}
</script>
