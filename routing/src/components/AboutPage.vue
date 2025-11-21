<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<template lang="">
  <div>
    <h1>This is About page</h1>
    <button @click="goToHome">go to home</button>
  </div>
</template>
<style></style>
