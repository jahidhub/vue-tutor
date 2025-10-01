<template>
  <Lifecycle />
</template>

<script>
import Lifecycle from "./components/Lifecycle.vue";
export default {
  name: "App",
  components: {
    Lifecycle,
  },
};
</script>

<style>
#app > div {
  border: dashed black 1px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}
#pResult {
  background-color: lightcoral;
  display: inline-block;
}
</style>
