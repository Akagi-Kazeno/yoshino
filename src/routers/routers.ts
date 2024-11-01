import {createRouter, createWebHistory} from 'vue-router'

const pages = import.meta.glob('../pages/**/page.vue')

const routes = Object.keys(pages).map((path) => {
    const routePath = path
            .replace('../pages', '')
            .replace('/page.vue', '')
        || '/'

    return {
        path: routePath,
        component: pages[path],
    }
})

const routers = createRouter({
    history: createWebHistory(),
    routes,
})

export default routers
