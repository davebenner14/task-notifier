<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full"
    :class="{ 'text-white': !darkMode, 'text-black': darkMode }"
  >
    <div class="flex items-center flex-shrink-0 mr-6 cursor-pointer" @click="toggleDarkMode">
      <i class="material-icons md-18">{{ darkMode ? 'brightness_high' : 'brightness_low' }}</i>
    </div>
    <div>
      <a href="https://github.com/davebenner14" target="_blank">
        <i class="fab fa-github text-2xl hover:text-gray-300" :class="{ 'text-white': !darkMode, 'text-black': darkMode }"></i>
      </a>
      <a href="https://www.linkedin.com/in/david-benner/" class="ml-4" target="_blank">
        <i class="fab fa-linkedin text-2xl hover:text-gray-300" :class="{ 'text-white': !darkMode, 'text-black': darkMode }"></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggle-dark-mode"); // Emitting the event to toggle dark mode in the parent component
    },
  },
};
</script>

<style scoped>
.material-icons.md-18 {
  font-size: 18px;
}
</style>
