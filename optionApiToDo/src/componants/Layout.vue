<script>
import Model from "@/componants/Model.vue";
import ToDoCard from "@/componants/ToDoCard.vue";

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
      <ToDoCard />
    </div>
    <Model />
  </div>
</template>

<style>
body {
  background-color: #333;
}
</style>
