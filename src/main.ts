import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from "pinia";
import App from "./App.vue"
import i18n from "./plugins/i18n"
import router from "./router/index"
import "./styles/index.scss"

createApp(App)
    .use(ElementPlus)
    .use(i18n)
    .use(router)
    .use(createPinia())
    .mount('#app')
