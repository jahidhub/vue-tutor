<script>
import Button from "./components/Button.vue";
import Slot from "./components/Slot.vue";
export default {
  components: {
    Button,
    Slot,
  },
  data() {
    return {
      hello: "Hello world",
    };
  },
};
</script>
<template>
  <!-- <Button>
    <span>{{ hello }}</span>
    <span style="color: red">Click me!</span>
    <AwesomeIcon name="plus" />
  </Button>


  <button @click="hello= 'Bye Bye World'">click</button>  -->

  <Slot />
</template>
<style scoped></style>
