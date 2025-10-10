<script>
export default {
  emits: ["closeModel", "submit-form"],
  data() {
    return {
      taskForm: {
        title: "",
        description: "",
      },
    };
  },

  methods: {
    submitForm() {
      // console.log(this.taskForm);
      this.$emit("submit-form",this.taskForm );
    },
  },
};
</script>

<template>
  <div
    class="model-wrapper fixed inset-0 flex items-center justify-center bg-black/30"
  >
    <div class="model md:w-[500px]">
      <div class="p-4 bg-gray-500">
        <div class="model-head flex justify-between items-center">
          <h4 class="w-2/3 wrap-break-word text-white text-lg font-bold">
            Add Task
          </h4>
          <div class="w-1/3 text-end">
            <button
              class="bg-white px-2 text-sm rounded text-black cursor-pointer"
              @click="$emit('closeModel')"
            >
              X
            </button>
          </div>
        </div>
        <div class="model-body pt-4 text-white flex flex-col">
          <label class="mb-3" for="title">Title</label>
          <input
            class="px-3 py-1 border bg-teal-500 text-white"
            type="text"
            id="title"
            v-model="taskForm.title"
            placeholder="Enter title"
          />
          <label class="mb-3 mt-5" for="description">Description</label>
          <textarea
            class="px-3 py-1 border bg-teal-500 text-white"
            type="text"
            id="description"
            v-model="taskForm.description"
            placeholder="Enter description"
          />
        </div>
        <div class="gap-4 flex justify-end mt-5">
          <button
            @click="$emit('closeModel')"
            class="bg-white px-3 text-lg rounded text-red-600 cursor-pointer"
          >
            close
          </button>
          <button
            @click="submitForm"
            class="bg-white px-3 text-lg rounded text-green-600 cursor-pointer"
          >
            add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
