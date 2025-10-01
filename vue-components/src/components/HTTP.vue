<template>
  <HTTPPOST/>
  <HTTPGET />
</template>

<script>
import HTTPGET from "./HTTPGET.vue";
import HTTPPOST from "./HTTPPOST.vue";
export default {
  name: "HTTP",
  components: {
    HTTPGET,
    HTTPPOST,
  },
};
</script>

<style scoped></style>
