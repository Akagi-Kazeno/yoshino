import {createApp} from 'vue'
import './style.scss'
import './tailwind.css'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import routers from "./routers/routers";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(routers).use(pinia).mount('#app')
