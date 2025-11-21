<script>
import Dynamic_components from "./components/Dynamic_components.vue";
import Modal from "./components/Modal.vue";
import Slot from "./components/Slot.vue";
import Vmodal from "./components/Vmodal.vue";
export default {
  components: {
    Slot,
    Modal,
    Dynamic_components,
    Vmodal
  },
  data() {},
};
</script>
<template>
  <div class="container">
    <!-- <Slot /> -->
    <!-- <Modal /> -->
    <!-- <Dynamic_components/> -->
    <Vmodal/>
  </div>
</template>
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
</style>
