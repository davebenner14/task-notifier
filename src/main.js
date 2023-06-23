import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App);

// Check if the user has set their system to use dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // If they have, add the 'dark' class to the root html tag
  document.documentElement.classList.add('dark')
}

app.mount("#app");
