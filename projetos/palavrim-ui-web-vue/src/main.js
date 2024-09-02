// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg/single-page'

import App from './App.vue'

import './assets/main.css'
import './assets/style.css'


// createApp(App).mount('#app')
export const createApp = ViteSSG(App)
