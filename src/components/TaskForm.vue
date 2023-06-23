<template>
  <div class="flex justify-center mt-10">
    <form @submit.prevent="addTask" class="flex">
      <input
        v-model="newTask"
        class="flex-initial border rounded-lg py-4 px-3 mr-4 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline text-xl font-poppins"
        type="text"
        placeholder="Enter a new task"
      />
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 text-white font-bold flex-none text-xl font-poppins"
        type="submit"
      >
        Add Task
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.$emit("task-added", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
