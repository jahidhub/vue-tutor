<script>
import Dynamic_components from "./components/Dynamic_components.vue";
import Modal from "./components/Modal.vue";
import Slot from "./components/Slot.vue";
export default {
  components: {
    Slot,
    Modal,
    Dynamic_components
  },
  data() {},
};
</script>
<template>
  <div class="container">
    <!-- <Slot /> -->
    <!-- <Modal /> -->
    <Dynamic_components/>
  </div>
</template>
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
</style>
