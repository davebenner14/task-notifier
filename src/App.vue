<template>
  <div :class="{ 'dark': darkMode, 'bg-gray-900': darkMode, 'bg-gray-100': !darkMode }" class="flex flex-col items-center min-h-screen">
    <AppNavbar @toggle-dark-mode="toggleDarkMode" :dark-mode="darkMode" />
    <div class="max-w-lg w-full mx-auto mt-64">
      <h1 class="text-5xl font-bold text-center mb-10 text-blue-600">
        Your Task Notifier
      </h1>
      <TaskForm @task-added="addTask" :dark-mode="darkMode" />
      <TaskList :tasks="tasks" class="mt-2" @edit-task="editTask" @delete-task="deleteTask" :dark-mode="darkMode" />
      <EmailTaskList :dark-mode="darkMode" />
    </div>
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import AppNavbar from "./components/AppNavbar.vue";
import EmailTaskList from "./components/EmailTaskList.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
    AppNavbar,
    EmailTaskList,
  },
  data() {
    return {
      tasks: [],
      darkMode: false,
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
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true"); // Save the dark mode preference to localStorage
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false"); // Save the dark mode preference to localStorage
      }
    },
    checkDarkModePreference() {
      const darkModePreference = localStorage.getItem("darkMode");
      this.darkMode = darkModePreference === "true";
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
  mounted() {
    this.checkDarkModePreference(); // Check the dark mode preference on app load
  },
};
</script>
