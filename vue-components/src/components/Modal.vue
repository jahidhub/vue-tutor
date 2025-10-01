<template>
  <div class="modal">
    <slot></slot>
    <button @click="$emit('close')">close</button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ["close"],
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: olivedrab;
}
</style>
