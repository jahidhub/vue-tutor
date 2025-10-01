<template>
  <div id="app">
    <Task v-model="tasks" />
  </div>
</template>

<script>
import Task from "./components/Task.vue";

export default {
  name: "App",
  components: { Task },
  data() {
    return {
      tasks: [],
    };
  },
  watch: {
    tasks: {
      handler(newTasks) {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      },
      deep: true,
    },
  },
  mounted() {
    const saved = localStorage.getItem("tasks");
    this.tasks = saved ? JSON.parse(saved) : [];
  },
};
</script>
