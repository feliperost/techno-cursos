import { createApp,  } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoading from '@/components/PageLoading.vue'

createApp(App).use(router).mount('#app')

const app = createApp({})

app.component('PageLoading', PageLoading)