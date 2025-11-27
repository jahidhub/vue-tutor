<template lang="">
  <div>
    <h1>This is Not Found page</h1>
    <button @click="goToHome">Home</button>
    <button @click="goToAbout">About</button>
  </div>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToAbout() {
      this.$router.push("/about-us");
    },
  },
};
</script>
<style lang=""></style>
