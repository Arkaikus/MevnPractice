<template>
  <Navbar />
  <SvgSignUp />
  <main class="form-signup mt-5">
    <form class="text-center">
      <img
        class="mb-4"
        src="@/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control rounded-4"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control rounded-4"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">
        Sign up
      </button>
      <small class="text-muted"
        >By clicking Sign up, you agree to the terms of use.</small
      >
      <hr class="my-4" />
      <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
      <button
        class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
        type="submit"
      >
        <svg class="bi me-1" width="16" height="16">
          <use xlink:href="#twitter" />
        </svg>
        Sign up with Twitter
      </button>
      <button
        class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4"
        type="submit"
      >
        <svg class="bi me-1" width="16" height="16">
          <use xlink:href="#facebook" />
        </svg>
        Sign up with Facebook
      </button>
      <button
        class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
        type="submit"
      >
        <svg class="bi me-1" width="16" height="16">
          <use xlink:href="#github" />
        </svg>
        Sign up with GitHub
      </button>
    </form>
  </main>
  <!-- <Footer /> -->
</template>

<script>
// import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import SvgSignUp from "@/components/Svg/SignUp.vue";

export default {
  components: {
    Navbar, SvgSignUp
  },
  methods: {
    handleSubmitForm() {
      this.$router.push("/Dashboard");
    },
  },
};
</script>


<style scoped>
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.form-signup {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>