<template>
  <div>
    <h2>Task List</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
