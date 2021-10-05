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
    <h1 class="h2">Save Customer</h1>
  </div>
  
  <form class="form row g-3" @submit.prevent="submit">
    <div class="col-md-6">
      <label for="input1" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="input1"
        placeholder="Name"
        v-model="customer.name"
      />
    </div>
    <div class="col-md-6">
      <label for="input2" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="input2"
        placeholder="Email"
        v-model="customer.email"
      />
    </div>
    <div class="col-12">
      <label for="input3" class="form-label">Address</label>
      <input
        type="text"
        class="form-control"
        id="input3"
        placeholder="1234 Main St"
        v-model="customer.address"        
      />
    </div>
    <div class="col-md-6">
      <label for="input4" class="form-label">City</label>
      <input
        type="text"
        class="form-control"
        id="input4"
        placeholder="City"
        v-model="customer.city"
      />
    </div>
    <div class="col-md-4">
      <label for="input5" class="form-label">State</label>
      <select id="input5" class="form-select">
        <option selected>{{ customer.state }}</option>
        <option>Example</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="input6" class="form-label">Postal Code</label>
      <input
        type="text"
        class="form-control"
        id="input6"
        placeholder="XXXXXX"
        v-model="customer.postal_code"
      />
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary w-100">Save</button>
    </div>
  </form>
</template>


<script>
import Swal from "sweetalert2";
import "@sweetalert2/themes/bootstrap-4/bootstrap-4.css";

export default {
  data() {
    return {
      customer: {
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
      },
    };
  },
  created() {
    // When component is created must load info
    // get the info from the api using fetch
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      // fetch data
      fetch(this.$backendHost + "/customers/" + id)
        // response to json
        .then((res) => res.json())
        // read data
        .then((data) => {
          this.customer = data;
          // FIXME: trigger select#input5
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
          name: this.customer.name,
          email: this.customer.email,
          address: this.customer.address,
          city: this.customer.city,
          state: this.customer.state,
          postal_code: this.customer.postal_code,          
        }),
      };

      // if route.params.id present then method is PUT
      let id = "";
      if ("id" in this.$route.params) {
        id = this.$route.params.id;
        config.method = "PUT";
      }

      // actually send the data
      fetch(this.$backendHost + "/customers/" + id, config)
        .then((res) => {
          if (res.status == 200) this.success();
        })
        .catch(()=>this.error());
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Customer Saved",
      }).then(() => {
        this.$router.push("/dashboard/customers");
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