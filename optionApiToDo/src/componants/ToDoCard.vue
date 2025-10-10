<script>
export default {
  props: {
    task: Object,
  },

  emits: ["remove-task"],
};
</script>

<template>
  <div class="card p-4 bg-teal-500">
    <h3 class="text-white bg-black px-3 py-1 rounded inline-block">
      ID : {{ task.id }}
    </h3>
    <div class="card-head flex justify-between items-center mt-4">
      <h4 class="w-2/3 wrap-break-word text-white text-lg font-bold capitalize">
        {{ task.title }}
      </h4>
      <div class="w-1/3 text-end">
        <button
          class="bg-white px-3 text-sm rounded text-red-600 cursor-pointer"
          @click="$emit('remove-task', task.id)"
        >
          remove
        </button>
      </div>
    </div>
    <div class="card-body pt-4 text-white">
      <p>
        {{ task.description }}
      </p>
    </div>
  </div>
</template>

<style lang=""></style>
