import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'wc-github-corners'

const app = createApp(App).use(createPinia())
app.mount('#app')