<template>
  <div id="app" class="flex flex-col items-center justify-center h-screen">
    <div class="max-w-lg w-full mx-auto">
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
    editTask(index, newTask) {
      this.tasks[index] = newTask;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
