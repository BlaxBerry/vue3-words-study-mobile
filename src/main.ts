import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable';
import ElementPlus from 'element-plus'
import { createPinia } from "pinia";
import App from "./App.vue"
import router from "./router/index"
import "./styles/index.scss"

import i18n from "./plugins/i18n"
import apolloClient from "./plugins/apollo/apolloClient"


createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
})
    .use(ElementPlus)
    .use(i18n)
    .use(router)
    .use(createPinia())
    .mount('#app')
