import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/index.css'

import { useRegisterSW } from 'virtual:pwa-register/vue'
useRegisterSW({ immediate: true })

const app = createApp(App)

app.mount('#app')
