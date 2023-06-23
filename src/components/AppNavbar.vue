<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- Removed the text and only left the icon for dark mode -->
      <i class="material-icons md-18">brightness_6</i>
    </div>
    <div>
      <!-- Github and LinkedIn icons -->
      <a href="https://github.com/davebenner14" target="_blank">
        <i class="fab fa-github text-2xl text-white hover:text-gray-300"></i>
      </a>
      <a href="https://www.linkedin.com/in/david-benner/" class="ml-4" target="_blank">
        <i class="fab fa-linkedin text-2xl text-white hover:text-gray-300"></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar", // Rename to AppNavbar
};
</script>

<style scoped>
.material-icons.md-18 {
  font-size: 18px;
}
</style>
