export default [
    {
        path: '/',
        redirect: '/home'
    },
    // home
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/Home/index.vue'),
    },
    // list
    {
        path: '/list',
        name: 'List',
        component: () => import('@/pages/List/index.vue'),
    },
    // my
    {
        path: '/my',
        name: 'My',
        component: () => import('@/pages/My/index.vue'),
    },

    // detail
    {
        path: '/word',
        name: 'Word',
        component: () => import('@/pages/Word/index.vue'),
        meta: {
            navigationDisable: true
        }
    }
]