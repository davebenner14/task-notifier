<template>
  <div id="app" class="flex flex-col items-center bg-gray-100 min-h-screen">
    <AppNavbar />
    <div class="max-w-lg w-full mx-auto mt-64">
      <h1 class="text-5xl font-bold text-center mb-10 text-blue-600">
        Your Task Notifier
      </h1>
      <TaskForm @task-added="addTask" />
      <TaskList
        :tasks="tasks"
        class="mt-2"
        @edit-task="editTask"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import AppNavbar from "./components/AppNavbar.vue"; // The import statement now matches the filename

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
    AppNavbar, 
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
    editTask(index, newTask) {
      this.tasks[index] = newTask;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
