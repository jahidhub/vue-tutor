<script>
export default {
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

      taskForm: {
        title: "",
        description: "",
      },
    };
  },

  methods: {
    addTask() {
      const lastId =
        this.todo.length > 0 ? this.todo[this.todo.length - 1].id : 0;

      const uniqueId = lastId + 1;
      console.log(uniqueId);
      if (
        this.taskForm.title.length > 0 &&
        this.taskForm.description.length > 0
      ) {
        this.todo.push({
          id: uniqueId,
          title: this.taskForm.title,
          description: this.taskForm.description,
        });
        this.showModel = false;
      } else {
        alert("Field Fill Require");
      }
    },
    openModel() {
      this.showModel = true;
      this.taskForm = {
        title: "",
        description: "",
      };
    },
    removeTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.todo = this.todo.filter((task) => task.id !== id);
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
          @click="openModel"
        >
          Add
        </button>
      </div>
    </div>
  </header>

  <div class="max-w-7xl my-5 mx-auto">
    <div class="card-wrapper gap-4 grid md:grid-cols-2 lg:grid-cols-3 mx-5">
      <div class="card p-4 bg-teal-500" v-for="task in todo">
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
              @click="removeTask(task.id)"
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
    </div>

    <div
      class="model-wrapper fixed inset-0 flex items-center justify-center bg-black/30"
      v-if="showModel"
    >
      <div class="model md:w-[500px]">
        <div class="p-4 bg-gray-500">
          <div class="model-head flex justify-between items-center">
            <h4 class="w-2/3 wrap-break-word text-white text-lg font-bold">
              Add Task
            </h4>
            <div class="w-1/3 text-end">
              <button
                @click="showModel = false"
                class="bg-white px-2 text-sm rounded text-black cursor-pointer"
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
              @click="showModel = false"
              class="bg-white px-3 text-lg rounded text-red-600 cursor-pointer"
            >
              close
            </button>
            <button
              @click="addTask"
              class="bg-white px-3 text-lg rounded text-green-600 cursor-pointer"
            >
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #333;
}
</style>
