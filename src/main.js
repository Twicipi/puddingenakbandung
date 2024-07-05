import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vScrollAnimation from './directives/v-scroll-animation';


import App from './App.vue'
import router from './router'


const app = createApp(App)
app.directive('scroll-animation', vScrollAnimation);
app.use(createPinia())
app.use(router)

app.mount('#app')
