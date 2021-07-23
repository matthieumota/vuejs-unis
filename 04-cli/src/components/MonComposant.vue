<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="reverseMessage">Inverser le message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World',
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
}
</script>
