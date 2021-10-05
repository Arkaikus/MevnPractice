<template>
  <div
    class="
      d-flex
      justify-content-between
      flex-wrap flex-md-nowrap
      align-items-center
      pt-3
      pb-2
      mb-3
      border-bottom
    "
  >
    <h1 class="h2">Products</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <div class="btn-group me-2">
          <router-link
            type="button"
            class="btn btn-primary"
            to="/dashboard/products/save"
          >
            Create Product
          </router-link>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Share
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Export
        </button>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          This week
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>

  <h2>Section title</h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>
            <router-link
              :to="{ name: 'ProductUpdate', params: { id: product._id } }"
              class="btn btn-sm btn-primary"
            >
              Edit
            </router-link>
            <button
              class="btn btn-sm btn-danger"
              @click.prevent="remove(product._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import "@sweetalert2/themes/bootstrap-4/bootstrap-4.css";

// TODO: Implement pagination
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    // fetch data
    fetch(this.$backendHost + "/products")
      // response to json
      .then((res) => res.json())
      // read data
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    remove(_id) {
      fetch(this.$backendHost + "/products/" + _id, { method: "DELETE" })
        .then((res) => {
          if (res.status == 204) this.success();
        })
        .catch(() => this.error());
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Product Deleted",
      }).then(() => this.$router.go());
    },
    error() {
      Swal.fire({
        icon: "error",
        text: "Error!",
      });
    },
  },
};
</script>