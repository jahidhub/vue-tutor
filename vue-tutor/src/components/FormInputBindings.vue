<template>
  <div>
    <h1 class="text-4xl">Form Input Bindings</h1>

    <div class="form mt-5">
      {{ text }}<br />
      <br />
      <!-- <input
        class="border p-4"
        :value="text"
        @input="(event) => ((text = event.target.value), event)"
      /> -->

      <input class="border p-4" type="text" v-model="text" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Enter your Name", 
    };
  },
};
</script>
<style scoped></style>
