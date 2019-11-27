<template>
  <div class="hello">
    <h1 @click="send">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello Vue JS'
    }
  },
  methods: {
    send () {
      console.log('Hello');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
