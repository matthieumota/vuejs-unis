<template>
    <div>
        <button @click="increment()"></button>
        {{ count }}
    </div>
</template>

<script>
import mixin from '../mixins'

export default {
    mixins: [mixin],
    data () {
        return {
            count: 10
        }
    }
}
</script>
