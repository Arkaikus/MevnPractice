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
        state: "to-post",
      },
    };
  },
  created() {
    // When component is created must load info
    // get the info from the api using fetch
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      // TODO: fetch data from the api with the id
      this.post = {
        _id: id,
        title: "Post from bd",
        content: "Content from bd",
        state: "to-post",
      };
    }
  },
  methods: {
    submit() {
      // Mock interaction
      // TODO: send the data to the api
      console.log(this.post);
      Swal.fire({
        icon: "success",
        text: "Post Saved",
      }).then(() => {
        this.$router.push("/dashboard/posts");
      });
    },
  },
};
</script>