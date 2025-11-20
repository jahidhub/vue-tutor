<script>
import Modal_layout from "./Modal_layout.vue";

export default {
  components: {
    Modal_layout,
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    closeBtn() {
      this.showModal = false;
    },
  },
};
</script>
<template>
  <button class="btn" @click="showModal = true">Open Modal</button>

  <Modal_layout header="Modal Hader" @close-btn="closeBtn" v-if="showModal">
    <template #title="newTitle">
      <h3>This is Modal title . {{ newTitle.newTitle }}</h3>
    </template>
    <template v-slot:content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam,
        cum deleniti fugit velit ea voluptate soluta modi recusandae similique
        cupiditate id optio nobis pariatur veritatis possimus sit suscipit
        mollitia odit maxime. Aperiam, quibusdam ratione eveniet tempore error
        soluta eos cumque pariatur unde natus temporibus quo laboriosam et velit
        dicta.
      </p>
    </template>

    <template v-slot:modal-footer> close </template>
  </Modal_layout>
</template>
<style scoped>
.btn {
  padding: 8px 15px;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
