<template>
  <SvgDashboard />
  <div
    class="d-flex flex-row overflow-hidden"
    style="max-height: 100vh !important"
  >
    <!-- SIDEBAR -->
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style="width: 280px; height: 100vh !important"
    >
      <router-link
        to="/dashboard/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-white text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">Dashboard</span>
      </router-link>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/dashboard/">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#home" />
            </svg>
            Home
          </router-link>
        </li>        
        <li>
          <router-link class="nav-link text-white" to="/dashboard/posts">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#table" />
            </svg>
            Posts
          </router-link>
        </li>
        <li>
          <router-link class="nav-link text-white" to="/dashboard/products">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#grid" />
            </svg>
            Products
          </router-link>
        </li>
        <li>
          <router-link class="nav-link text-white" to="/dashboard/customers">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#people-circle" />
            </svg>
            Customers
          </router-link>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          class="
            d-flex
            align-items-center
            text-white text-decoration-none
            dropdown-toggle
          "
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://www.gravatar.com/avatar/?d=mp"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>Administrator</strong>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <!-- <li><a class="dropdown-item">New project...</a></li>
          <li><a class="dropdown-item">Settings</a></li>
          <li><a class="dropdown-item">Profile</a></li>
          <li><hr class="dropdown-divider" /></li> -->
          <li>
            <router-link class="dropdown-item" to="/">Sign out</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container-fluid px-5 overflow-scroll">
      <router-view />
    </div>
  </div>
</template>

<script>
import SvgDashboard from "@/components/Svg/Dashboard.vue";
export default {
  components: {
    SvgDashboard,
  },
};
</script>

<style scoped>
.bi {
  fill: currentColor;
}
</style>