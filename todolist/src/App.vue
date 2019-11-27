<template>
  <div>
    <!-- <span v-sticky:top="'transparent'"></span>
    <span v-sticky:left="'transparent'"></span> -->
    <button @click="show = !show">Afficher / Masquer</button>
    <transition name="bounce" mode="out-in">
      <h1 class="text-center" v-if="show" key="visible">Todos</h1>
      <h1 v-background="'red'" class="text-center" v-else key="invisible">Good Bye</h1>
    </transition>
    {{ 10 | tax }}
    {{ 10.543 | tax(10) }}
    <div class="row">
      <div class="offset-2 col-8">
        <TodoForm @created="addTodo($event)" />
        <TodoList :todos="todos" />
      </div>
    </div>

    <Counter />
  </div>
</template>

<script>
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    TodoForm,
    TodoList,
    Counter
  },
  data () {
    return {
      todos: [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
        { id: 3, name: 'Task 3', completed: true }
      ],
      show: false
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    }
  },
  directives: {
    background: {
      bind: function (el, binding) {
        console.log(el, binding)
        el.style.backgroundColor = binding.value
      }
    },
    sticky: {
      bind: function (el, binding) {
        el.style.position = 'absolute'
        el.style.width = '100%'
        el.style.height = '50px'
        el.style.backgroundColor = binding.value

        var position = binding.arg

        if ('top' === position || 'right' === position || 'bottom' === position || 'left' === position) {
          el.style[position] = 0
        }

        if ('right' === position || 'left' === position) {
          el.style.width = '50px'
          el.style.height = '100%'
        }
      }
    }
  },
  filters: {
    tax: function (value, rate) {
      let r = rate || 20;

      return (value * (1 + r / 100)).toFixed(2).replace('.', ',') + ' €'
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-move {
  transition: transform 1s;
}

.slide-enter-active {
  transition: all .3s;
}

.slide-leave-active {
  transition: all .9s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
