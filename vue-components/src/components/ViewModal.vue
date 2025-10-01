<template>
  <button @click="activeTab = 'TabA'">TabA</button>
  <button @click="activeTab = 'TabB'">TabB</button>
  <button @click="activeTab = 'TabC'">TabC</button>

  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>

  <!-- <TabA v-if="activeTab === 'TabA'" />
    <TabB v-if="activeTab === 'TabB'" />
    <TabC v-if="activeTab === 'TabC'" /> -->

  <div>
    <h4>This is MOdel</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quo ex
      laudantium ea, labore vitae! Laboriosam harum sed expedita. Itaque ullam
      facilis, obcaecati hic laborum officia, iure quibusdam maiores, adipisci
      illo eos alias. Sed id, quidem natus possimus repellat odio iste quasi
      aperiam, velit vitae itaque nulla est. Voluptatibus, possimus.
    </p>

    <button @click="showModal = true">Show Modal</button>
  </div>

  <Teleport to="#modal-root">
    <Modal v-show="showModal" @close="showModal = false">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
      laborum?
    </Modal>
  </Teleport>
</template>

<script>
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
import TabC from "./TabC.vue";
import Modal from "./Modal.vue";

export default {
  name: "ViewModal",
  components: {
    TabA,
    TabB,
    TabC,
    Modal,
  },
  data() {
    return {
      activeTab: "TabA",
      showModal: false,
    };
  },
};
</script>

<style scoped></style>
