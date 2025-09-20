<template>
  <div>
    <h1>This is Event Handling</h1>
    <!-- `greet` is the name of the method defined above -->
    <button @click="greet" class="bg-teal-400 p-3">Greet</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Vue.js",
    };
  },
  methods: {
    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`);
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
};
</script>
<style lang=""></style>
