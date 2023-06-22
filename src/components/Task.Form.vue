<template>
  <form @submit.prevent="submitForm">
    <label for="task">Task:</label>
    <input type="text" id="task" v-model="task" />
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("add-task", this.task);
      this.task = "";
    },
  },
};
</script>
