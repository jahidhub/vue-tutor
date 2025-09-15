<template>
  <div>
    <div class="py-5 text-center">
      <h3 class="text-center font-bold mb-5 text-3xl text-teal-500">
        Conditional Rendering
      </h3>

      <h1 v-if="toggle">I am Sohan</h1>
      <h1 v-else>I am Rohan</h1>

      <button @click="toggle = !toggle" class="border p-3 mt-5">
        Toggle the name
      </button>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {},

  methods: {},
};
</script>
<style></style>
