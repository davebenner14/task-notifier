<template>
  <div>
    <TaskForm @add-task="addTask" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm.vue";

export default {
  components: {
    TaskForm,
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
