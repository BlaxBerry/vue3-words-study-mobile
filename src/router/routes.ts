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

    // add word
    {
        path: '/add',
        name: 'Add',
        component: () => import('@/pages/Add/index.vue'),
    },

    // detail
    {
        path: '/word',
        name: 'Word',
        component: () => import('@/pages/Word/index.vue'),
        meta: {
            navigationDisable: true
        }
    },

    // edit
    {
        path: '/edit',
        name: 'Edit',
        component: () => import('@/pages/Edit/index.vue'),
        meta: {
            navigationDisable: true
        }
    },
]