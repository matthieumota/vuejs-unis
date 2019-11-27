<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user/matthieu" class="nav-link">Matthieu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user/toto" class="nav-link">Toto</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Produits</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products/create" class="nav-link">Créer un produit</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style></style>
