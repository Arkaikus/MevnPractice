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
      // TODO: fetch data from the api with the id
      this.product = {
        _id: id,
        name: "Product from bd",
        description: "Description from bd"        
      };
    }
  },
  methods: {
    submit() {
      // Mock interaction
      // TODO: send the data to the api
      console.log(this.product);
      Swal.fire({
        icon: "success",
        text: "Product Saved",
      }).then(() => {
        this.$router.push("/dashboard/products");
      });
    },
  },
};
</script>