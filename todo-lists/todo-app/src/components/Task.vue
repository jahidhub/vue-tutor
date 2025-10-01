<template>
  <div class="container">
    <div class="task">
      <div class="title">
        <h1>To Do List</h1>
      </div>

      <!-- Add Task -->
      <div class="form">
        <input
          v-model="newTask"
          type="text"
          placeholder="New Task"
          @keyup.enter="addTask"
        />
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>

      <!-- Task Items -->
      <div class="taskItems">
        <ul>
          <li v-for="task in modelValue" :key="task.id">
            <button
              :class="{ done: task.completed }"
              @click="toggleTask(task.id)"
            >
              {{ task.title }}
            </button>
            <button @click="deleteTask(task.id)">
              <i class="far fa-trash-alt"></i>
            </button>
          </li>
        </ul>
      </div>

      <!-- Buttons -->
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clearAll">Clear all</button>
      </div>

      <!-- Pending Count -->
      <div class="pandingTasks">
        <span
          >Pending Tasks:
          {{ modelValue.filter((t) => !t.completed).length }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    modelValue: Array,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    emitTasks(newTasks) {
      this.$emit("update:modelValue", newTasks);
    },
    addTask() {
      if (this.newTask.trim()) {
        const newTasks = [
          ...this.modelValue,
          {
            id: Date.now(),
            title: this.newTask.trim(),
            completed: false,
          },
        ];
        this.emitTasks(newTasks);
        this.newTask = "";
      }
    },
    deleteTask(id) {
      const updated = this.modelValue.filter((task) => task.id !== id);
      this.emitTasks(updated);
    },
    toggleTask(id) {
      const updated = this.modelValue.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      this.emitTasks(updated);
    },
    clearCompleted() {
      const updated = this.modelValue.filter((task) => !task.completed);
      this.emitTasks(updated);
    },
    clearAll() {
      this.emitTasks([]);
    },
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
