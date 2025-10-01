<template>
  <button @click="getPosts">load Posts</button>

  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.id }} {{ post.title }}</h3>
    <h4>{{ post.body }}</h4>
  </div>
  <div v-if="errorMsg" class="text-danger">
    <h3>{{ errorMsg }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HTTPGET",
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          // console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          // console.log(error);
          this.errorMsg = "Error retriving Data";
        });
    },
  },
};
</script>

<style scoped>
.text-danger {
  color: rgb(206, 20, 20);
}
</style>
