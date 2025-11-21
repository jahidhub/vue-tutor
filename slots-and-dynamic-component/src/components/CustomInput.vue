<script>
export default {
  props: ["title"],

  emits: ["update:title"],
};
</script>

<template>
  <div>
    <input :value="title" @input="$emit('update:title', $event.target.value)" />
  </div>
</template>
