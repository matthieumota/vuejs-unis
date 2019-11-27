<template>
  <div>
    <transition-group name="fade" tag="ul" class="list-unstyled">
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="'completed-'+todo.id" v-model="todo.completed">
          <label class="custom-control-label" :for="'completed-'+todo.id"></label>
          <label @dblclick="editTodo(todo)" v-if="editing !== todo">{{ todo.name }}</label>
          <input type="text"
              v-model="todo.name"
              v-if="editing === todo"
              @keyup.enter="endEdit"
              @blur="endEdit"
              v-todo-focus="editing === todo">
        </div>
      </li>
    </transition-group>

    <div class="row">
      <div class="col-6">
        {{ remaining }} tâches restantes
        <button @click="todos.sort(() => Math.random() - 0.5)">Random</button>
      </div>
      <div class="col-6">
        <span class="p-2 filter" @click="filter = 'all'" :class="{ selected: 'all' === filter }">Toutes</span>
        <span class="p-2 filter" @click="filter = 'active'" :class="{ selected: 'active' === filter }">Actives</span>
        <span class="p-2 filter" @click="filter = 'completed'" :class="{ selected: 'completed' === filter }">Terminées</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: ['todos'],
  data () {
    return {
      editing: null,
      filter: 'all'
    }
  },
  methods: {
    editTodo (todo) {
      this.editing = todo
    },
    endEdit () {
      this.editing = null
    }
  },
  computed: {
    remaining () {
      return this.todos.filter(t => !t.completed).length
    },
    filteredTodos () {
      if ('active' === this.filter) {
        return this.todos.filter(t => !t.completed)
      } else if ('completed' === this.filter) {
        return this.todos.filter(t => t.completed)
      }

      return this.todos
    }
  },
  directives: {
    'todo-focus': {
      bind: function (el, binding) {
        console.log(el, binding.value)
        if (binding.value) {
          Vue.nextTick(() => el.focus())
          //el.focus()
        } 
      }
    }
  }
}
</script>

<style>
.filter {
  cursor: pointer;
}

.filter.selected {
  border: 1px solid #000;
}

.completed label {
  text-decoration: line-through;
}
</style>
