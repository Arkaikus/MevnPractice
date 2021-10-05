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
    <h1 class="h2">Save Product</h1>
  </div>
  <form @submit.prevent="submit" class="form">
    <div class="mb-3">
      <label for="name" class="form-label"> Name </label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Name"
        v-model="product.name"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label"> Description </label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        v-model="product.description"
        placeholder="Product Description"
      ></textarea>
    </div>
    <button class="btn btn-primary w-100">Save</button>
  </form>
</template>

<script>
import Swal from "sweetalert2";
import "@sweetalert2/themes/bootstrap-4/bootstrap-4.css";

export default {
  data() {
    return {
      product: {
        name: "",
        description: "",
      },
    };
  },
  created() {
    // When component is created must load info
    // get the info from the api using fetch
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      // fetch data
      fetch(this.$backendHost + "/products/" + id)
        // response to json
        .then((res) => res.json())
        // read data
        .then((data) => {
          this.product = data;
        });
    }
  },
  methods: {
    submit() {
      // data to send the api via POST method
      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.product.name,
          description: this.product.description,
        }),
      };

      // if route.params.id present then method is PUT
      let id = "";
      if ("id" in this.$route.params) {
        id = this.$route.params.id;
        config.method = "PUT";
      }

      // actually send the data
      fetch(this.$backendHost + "/products/" + id, config)
        .then((res) => {
          if (res.status == 200) this.success();
        })
        .catch(()=>this.error());
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Product Saved",
      }).then(() => {
        this.$router.push("/dashboard/products");
      });
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