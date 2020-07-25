<template>
  <div>
    <!-- These are here just to show the structure of the list items -->
    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
    <li :class="{ completed: todo.completed, editing: todo.id === editing }">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="todo.completed" @change="e => todo.completed = e.target.checked">
        <label @dblclick="edit(todo)">{{ todo.name }}</label>
        <button class="destroy" @click="remove"></button>
      </div>
      <input class="edit"
        v-model="todo.name"
        @keyup.enter="endEdit"
        @blur="editing = null"
        ref="todo"
      >
    </li>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todo: this.data,
      editing: null
    }
  },
  props: ['data'],
  methods: {
    edit(todo) {
      this.editing = todo.id;

      // On attends la MAJ du DOM pour focus sur le input
      this.$nextTick(() => {
        this.$refs.todo.focus();
      });
    },
    endEdit() {
      this.editing = null;
    },
    remove() {
      this.$emit('remove');
    }
  }
};
</script>
