<script>
import Model from "./Model.vue";
import ToDoCard from "./ToDoCard.vue";
export default {
  components: {
    Model,
    ToDoCard,
  },

  data() {
    return {
      todo: [
        {
          id: 1,
          title: "title1",
          description: "lorem some",
        },
        {
          id: 2,
          title: "title2",
          description: "lorem some",
        },
        {
          id: 3,
          title: "title2",
          description: "lorem some",
        },
      ],
      showModel: false,
    };
  },

  methods: {
    addTask(taskData) {
      // console.log(taskData);

      const lastId =
        this.todo.length > 0 ? this.todo[this.todo.length - 1].id : 0;

      const uniqueId = lastId + 1;
      // console.log(uniqueId);

      this.todo.push({
        id: uniqueId,
        title: taskData.title,
        description: taskData.description,
      });
      this.showModel = false;
    },

    removeTask(taskId) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.todo = this.todo.filter((task) => task.id !== taskId);
      }
    },
  },
};
</script>

<template>
  <header class="bg-blue-600 py-5">
    <div class="max-w-7xl mx-auto">
      <div class="nav flex justify-between item-center mx-5">
        <h2 class="text-2xl font-bold text-white uppercase">ToDo List</h2>
        <button
          class="bg-white px-3 text-xl rounded cursor-pointer"
          @click="showModel = true"
        >
          Add
        </button>
      </div>
    </div>
  </header>

  <div class="max-w-7xl my-5 mx-auto">
    <div class="card-wrapper gap-4 grid md:grid-cols-2 lg:grid-cols-3 mx-5">
      <ToDoCard
        v-for="tasklist in todo"
        :task="tasklist"
        :key="tasklist.id"
        @remove-task="(taskId) => removeTask(taskId)"
      />
    </div>
    <Model
      v-if="showModel"
      @closeModel="showModel = false"
      @submit-form="(taskData) => addTask(taskData)"
    />
  </div>
</template>

<style>
body {
  background-color: #333;
}
</style>
