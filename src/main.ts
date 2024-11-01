import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import routers from "./routers/routers.ts";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(routers).use(pinia).mount('#app')
