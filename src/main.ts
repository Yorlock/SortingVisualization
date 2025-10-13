import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App); 

app.use(createPinia());

app.mount('#app')
