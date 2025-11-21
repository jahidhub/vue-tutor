<script>
import CustomInput from "./CustomInput.vue";

export default {
  components: {
    CustomInput,
  },

  data() {
    return {
      inputvalue: "Hello Parent",
    };
  },
};
</script>
<template>
  <div>
    <CustomInput v-model:title="inputvalue" class="title-class" />
    <br />
    {{ inputvalue }}
  </div>
</template>
<style></style>
