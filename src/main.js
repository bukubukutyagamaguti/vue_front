import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import router from "./router/index.js";
 
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

createApp(App).use(router).mount('#app')
