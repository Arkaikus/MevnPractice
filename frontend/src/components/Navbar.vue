<template>
  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Home'}">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Pricing'}">
            Pricing
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Features'}">
            Features
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Heroes'}">
            Heroes
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Carousel'}">
            Carousel
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
          <router-link class="nav-link link-dark px-2" to="/signup"> Sign up </router-link>
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

