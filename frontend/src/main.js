import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.config.globalProperties.$backendHost="http://localhost:4000"
app.use(router);
app.mount('#app');
