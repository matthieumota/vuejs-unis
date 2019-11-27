<template>
  <div>
    <input type="text"
           v-model="todo.name"
           @keyup.enter="create"
           placeholder="What needs to be done ?"
           class="form-control"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: { id: 3, name: '', completed: false }
    }
  },
  methods: {
    create () {
      if ('' === this.todo.name) return;

      this.todo.id++
      this.$emit('created', {...this.todo})
      this.todo.name = ''
    }
  }
}
</script>

<style>

</style>
