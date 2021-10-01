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
      <ul class="nav">
        <li class="nav-item">
          <!-- <a href="#" class="nav-link link-dark px-2">Sign in</a> -->
          <router-link class="nav-link link-dark px-2" to="/signin">
            Sign in
          </router-link>
        </li>
        <li class="nav-item">
          <a
            data-toggle="modal"
            data-target="#exampleModal"
            class="nav-link link-dark px-2"
          >
            Sign up
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-lg-0
          me-lg-auto
          text-dark text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">MEVN Practice!</span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0">
        <input
          type="search"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
  </header>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

