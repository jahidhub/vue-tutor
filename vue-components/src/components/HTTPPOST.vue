<template>
  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">User Id: </label>
        <input type="number" id="userId" v-model="formData.userId" />
      </div>
      <br />
      <div>
        <label for="title">Post Title: </label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <br />
      <div>
        <label for="body">Post Body: </label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <br />
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HTTPPOST",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)

        .then((response) => {
          console.log(response.data);
        })
        .catch(
            (error)=>{
                console.log(error);
            }
        )
        ;
    },
  },
};
</script>

<style scoped></style>
