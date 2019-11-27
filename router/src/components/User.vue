<template>
  <div>
    User {{ $route.params }}
    <router-link :to="'/user/'+$route.params.name+'/settings'">Settings</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('mounted', this.$route)
  },
  watch: {
    $route (to, from) {
      console.log('watch', to, from)
    }
  }
}
</script>
