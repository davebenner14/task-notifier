<template>
  <div id="app">
    <TaskForm @task-added="addTask" />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>
