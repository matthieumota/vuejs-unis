<template>
  <div>
    <header class="shadow mb-8">
      <div class="flex justify-between items-center max-w-2xl mx-auto">
        <router-link class="flex items-center" to="/">
          <img class="w-8 h-8" alt="Vue logo" src="./assets/logo.png">
          <h1 class="ml-4 font-bold text-2xl">Pizzeria</h1>
        </router-link>

        <ul class="flex">
          <li>
            <router-link class="px-4 py-6 inline-block hover:bg-gray-200" to="/pizzas" active-class="bg-gray-200">
              Pizzas
            </router-link>
          </li>
          <li v-if="!user">
            <router-link class="px-4 py-6 inline-block hover:bg-gray-200" to="/register" active-class="bg-gray-200">
              Inscription
            </router-link>
          </li>
          <li v-if="!user">
            <router-link class="px-4 py-6 inline-block hover:bg-gray-200" to="/login" active-class="bg-gray-200">
              Connexion
            </router-link>
          </li>
          <li v-if="user" @click="user = null" class="px-4 py-6 inline-block hover:bg-gray-200">
            {{ user.email }}
          </li>
          <li><a class="px-4 py-6 inline-block hover:bg-gray-200" href="#">Panier (0)</a></li>
        </ul>
      </div>
    </header>

    <div class="max-w-2xl mx-auto">
      <router-view></router-view>
    </div>

    <footer class="border-t mt-12">
      <div class="max-w-2xl mx-auto py-12">
        <div class="grid grid-cols-8 gap-4">
          <div class="col-span-2">
            <h4 class="font-semibold mb-3">About</h4>
          </div>
          <div class="col-span-2">
            <h4 class="font-semibold mb-3">Services</h4>
          </div>
          <div class="col-span-4">
            <h4 class="font-semibold mb-3">Footer Header</h4>
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    }
  }
}
</script>
