<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="user in users" :key="user.id">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">
                <input type="text" v-model="user.email">
              </h2>
              <a class="btn btn-info" @click="save(user)">
                Modifier
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.$http.get('http://jsonplaceholder.typicode.com/users').then(response => {
      this.users = response.data
    })
  },
  methods: {
    save (user) {
      this.$http.put('http://jsonplaceholder.typicode.com/users/' + user.id, user)
    }
  }
}
</script>

<style></style>
