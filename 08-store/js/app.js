const store = {
  state: {
    count: 0,
    cart: []
  },
  increment() {
    this.state.count++;
  },
  decrement() {
    this.state.count++;
  }
};

Vue.component('counter', {
  data: function () {
    return {
      state: store.state,
      count: 0
    }
  },
  methods: {
    increment: function () {
      store.increment();
      this.count++;
    }
  },
  template: `<button @click="increment">{{ count }} / {{ state.count }}</button>`
});

var EventBus = new Vue();

Vue.component('composant1', {
  template: `<div @click="event">Composant 1</div>`,
  methods: {
    event: function () {
      EventBus.$emit('event', 'test');
    }
  }
});

Vue.component('composant2', {
  template: `<div>
    Composant 2
    <composant1></composant1>
  </div>`
});

Vue.component('composant3', {
  template: `<div>
    Composant 3
    <composant2></composant2>
  </div>`
});

var app = new Vue({
  el: '#app',
  data: {
    state: store.state,
    message: null
  },
  mounted: function () {
    EventBus.$on('event', function (event) {
      console.log(event);
      app.message = event;
    });
  }
});
