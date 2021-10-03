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
    <h1 class="h2">Posts</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <router-link
          type="button"
          class="btn btn-primary"
          to="/dashboard/posts/save"
        >
          Create Post
        </router-link>
      </div>
      <div class="btn-group me-2">
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

  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>{{ post.state }}</td>
          <td>
            <router-link
              :to="{ name: 'PostUpdate', params: { id: post._id } }"
              class="btn btn-sm btn-primary"
            >
              Edit
            </router-link>
            <button class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @click.prevent="deleteStudent(student._id)" <- delete button action
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    // TODO: Fetch data from api
    this.posts = [
      {
        _id: "1",
        title: "Example",
        content: "Content example",
        state: "created",
      },
    ];
  },
};
</script>