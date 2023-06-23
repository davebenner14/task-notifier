<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl font-bold mb-4">Email Task List</h2>
    <form @submit.prevent="emailTaskList" class="mb-4">
      <div class="flex items-center">
        <input v-model="email" type="email" class="mr-2 p-2 border rounded" placeholder="Enter your email" required />
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Email Task List</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    emailTaskList() {
      const subject = 'Task List';
      const body = `Here is your task list:\n${this.tasks.join('\n')}`;
      const mailtoLink = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the user's email client with the pre-filled email
      window.location.href = mailtoLink;

      this.email = ''; // Clear the email input after submitting
    },
  },
};
</script>

<style scoped>
input[type="email"] {
  width: 300px;
}
</style>
