<script>
export default {
  emits: ["on-click"],
  props: {
    text: {
      type: String,
      required: true,
    },

    // data() {

    // },
  },
};
</script>
<template>
  <button @click="$emit('on-click')">
    <slot>save</slot>
  </button>
</template>
<style scoped></style>
