<script>
export default {
  emits: ["close-btn"],
  props: {
    header: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="modal">
    <div class="modal-box">
      <h1 class="main-title">{{ header }}</h1>
      <div class="title">
        <slot name="title" newTitle="child Modal title"></slot>
      </div>

      <div class="content">
        <slot name="content"></slot>
      </div>

      <button class="close-btn" @click="$emit('close-btn')">
        <slot name="modal-footer"></slot>
      </button>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  color: rebeccapurple;
}
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  text-align: center;
}

.close-btn {
  margin-top: 15px;
  padding: 8px 15px;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
