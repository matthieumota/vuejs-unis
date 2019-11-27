<template>
  <div>
    Formulaire pour {{ $route.params.name }}

    <button @click="goToContact()">Aller sur la page contact</button>
    <button @click="back()">Aller en arrière</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToContact () {
        this.$router.push({ path: '/contact' })
    },
    back () {
        this.$router.go(-1)
    }
  }
}
</script>
