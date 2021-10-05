<template>
  <div
    class="
      d-flex
      flex-wrap flex-md-nowrap
      align-items-center
      pt-3
      pb-2
      mb-3
      border-bottom
    "
  >
    <h1 class="h2">Save Post</h1>
  </div>
  <form @submit.prevent="submit" class="form">
    <div class="mb-3">
      <label for="title" class="form-label"> Title </label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Title"
        v-model="post.title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label"> Content </label>
      <textarea
        class="form-control"
        id="content"
        rows="3"
        v-model="post.content"
        placeholder="Post Content"
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
      post: {
        title: "",
        content: "",
      },
    };
  },
  created() {
    // When component is created must load info
    // get the info from the api using fetch
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      // fetch data
      fetch(this.$backendHost + "/posts/" + id)
        // response to json
        .then((res) => res.json())
        // read data
        .then((data) => {
          this.post = data;
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
          title: this.post.title,
          content: this.post.content,
        }),
      };

      // if route.params.id present then method is PUT
      let id = "";
      if ("id" in this.$route.params) {
        id = this.$route.params.id;
        config.method = "PUT";
      }

      // actually send the data
      fetch(this.$backendHost + "/posts/" + id, config)
        .then((res) => {
          if (res.status == 200) this.success();
        })
        .catch(()=>this.error());
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Post Saved",
      }).then(() => {
        this.$router.push("/dashboard/posts");
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