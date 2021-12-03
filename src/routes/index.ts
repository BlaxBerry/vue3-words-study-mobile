import { RouteConfig } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes: Array<RouteConfig> = [
    {
        path: '*',
        component: () => import('../views/404.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/private',
        name: 'Private',
        component: () => import('../views/Private/index.vue')
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import('../views/Works/index.vue')
    }
]

export default routes