<template>
  <div>
    <h2>Add a New Task</h2>
    <form @submit.prevent="addTask">
      <label for="task-name">Task Name:</label>
      <input id="task-name" v-model="newTaskName" type="text" required />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      newTaskName: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("task-added", this.newTaskName);
      this.newTaskName = "";
    },
  },
};
</script>
