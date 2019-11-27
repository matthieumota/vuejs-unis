<template>
  <div>
    https://github.com/matthieumota/vuejs-unis
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
              <a class="btn btn-danger" @click="remove(user)">
                Supprimer
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
    },
    remove (user) {
      this.$http.delete('http://jsonplaceholder.typicode.com/users/' + user.id).then(() => {
        this.users = this.users.filter(u => u.id !== user.id)
      })
    }
  }
}
</script>

<style></style>
