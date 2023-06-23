<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl font-bold mb-4">Email Task List</h2>
    <form @submit.prevent="emailTaskList">
      <div class="flex items-center">
        <input v-model="email" type="email" class="mr-2 p-2 border rounded text-black" placeholder="Enter your email" required />
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Email Task List</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    emailTaskList() {
      // Logic to send the task list to the entered email
      // You can use a service or library for sending emails, such as Nodemailer or a server-side API
      // Here, we'll simulate sending by logging the email to the console
      console.log(`Task list will be emailed to: ${this.email}`);
      this.email = ""; // Clear the email input after submitting
    },
  },
};
</script>

<style scoped>
input[type="email"] {
  width: 300px;
}
</style>
