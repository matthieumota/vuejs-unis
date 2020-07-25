<template>
  <div id="todo-list">
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main" v-if="todos.length">
      <input id="toggle-all" class="toggle-all" type="checkbox" :checked="remaining === 0">
      <label for="toggle-all" @click="toggleAll">Mark all as complete</label>
      <ul class="todo-list">
        <Todo v-for="todo in filteredTodos" :key="todo.id" :data="todo" @remove="remove(todo)" />
      </ul>
    </section>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer" v-if="todos.length">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{ remaining }}</strong> item(s) left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a href="#" :class="{ selected: 'all' === filter }" @click="filter = 'all'">All</a>
        </li>
        <li>
          <a href="#" :class="{ selected: 'active' === filter }" @click="filter = 'active'">Active</a>
        </li>
        <li>
          <a href="#" :class="{ selected: 'completed' === filter }" @click="filter = 'completed'">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" v-if="remaining < todos.length" @click="clearCompleted">Clear completed</button>
    </footer>
  </div>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  name: "TodoList",
  components: {
    Todo
  },
  data() {
    return {
      todos: this.data,
      filter: 'all'
    }
  },
  props: {
    data: {
      default: () => []
    }
  },
  methods: {
    remove(todo) {
      this.todos.splice(
        this.todos.indexOf(todo), 1
      );
    },
    toggleAll() {
      let toggle = 0 !== this.remaining;

      this.todos.forEach(todo => {
        todo.completed = toggle
      });
    },
    clearCompleted() {
      this.todos = this.todos.filter(t => !t.completed);
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(t => !t.completed).length;
    },
    filteredTodos() {
      if ('active' === this.filter) {
        return this.todos.filter(t => !t.completed);
      } else if ('completed' === this.filter) {
        return this.todos.filter(t => t.completed);
      }

      return this.todos;
    }
  }
};
</script>
