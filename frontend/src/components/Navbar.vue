<template>
  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2 active" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2 active" to="/pricing">
            Pricing
          </router-link>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <!-- <a href="#" class="nav-link link-dark px-2">Sign in</a> -->
          <router-link class="nav-link link-dark px-2" to="/signin">
            Sign in
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link link-dark px-2"> Sign up </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.container {
  max-width: 960px;
}
</style>

