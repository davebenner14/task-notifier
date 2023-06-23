<template>
  <div class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mt-10 mx-auto w-1/2">
      <h2 class="text-gray-800 dark:text-gray-200 text-3xl mb-4 font-poppins text-center">Task List</h2>
      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="mb-4 text-gray-800 dark:text-gray-200 text-xl font-poppins text-center"
          @mouseover="hoveredTask = task"
          @mouseleave="hoveredTask = null"
        >
          <div v-if="task === editTask" class="mb-2">
            <input
              v-model="taskInput"
              @keyup.enter="saveTask(index)"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl font-poppins"
              placeholder="Enter a new task..."
            />
          </div>
          <span
            v-else
            :class="{ 'hovered-text': task === hoveredTask || task === editTask }"
            class="inline-block w-full text-xl font-poppins cursor-pointer"
          >
            {{ index + 1 }}. {{ task }}
          </span>
          <div
            class="flex justify-center button-container"
            :class="{
              'buttons-visible': task === hoveredTask || task === editTask,
            }"
          >
            <button
              v-if="task !== editTask"
              class="ml-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-lg font-poppins mt-2"
              @click="editTask = task"
            >
              Edit
            </button>
            <button
              v-if="task === editTask"
              class="ml-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-lg font-poppins mt-2"
              @click="saveTask(index)"
            >
              Save
            </button>
            <button
              class="ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-lg font-poppins mt-2"
              @click="deleteTask(index)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
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
  data() {
    return {
      editTask: null,
      taskInput: "",
      hoveredTask: null,
    };
  },
  methods: {
    saveTask(index) {
      this.$emit("edit-task", index, this.taskInput);
      this.editTask = null;
      this.taskInput = "";
    },
    deleteTask(index) {
      this.$emit("delete-task", index);
      this.editTask = null;
    },
  },
};
</script>

<style scoped>
.hovered-text {
  color: #1e90ff; /* This is a standard web "link blue" color */
  /* Adding dark mode hover color */
  @media (prefers-color-scheme: dark) {
    color: #63b3ed;
  }
}

.button-container {
  visibility: hidden;
}

.buttons-visible {
  visibility: visible;
}
</style>
