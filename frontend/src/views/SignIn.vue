<template>
  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2 active" to="/"
            >Home</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <main class="form-signin mt-5">
    <form class="text-center" @submit.prevent="handleSubmitForm">
      <img
        class="mb-4"
        src="@/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </main>
  <Footer />
</template>

<script>
// import axios from "axios";
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
  //   data() {
  //     return {
  //       student: {
  //         name: "",
  //         email: "",
  //         phone: "",
  //       },
  //     };
  //   },
  methods: {
    handleSubmitForm() {
      this.$router.push("/Dashboard");
    },
  },
};
</script>


<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>