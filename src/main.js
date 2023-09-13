import { createApp } from "vue/dist/vue.esm-bundler";
import './style.css'
import Index from './Index.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(Index)
app.use(router).use(ElementPlus).mount('#app')

