import Vue from 'vue'
import Router from 'vue-router'

const main = resolve => require.ensure([], () => resolve(require('@/components/main')))


Vue.use(Router)

export const routeMap = [
    {
        path: '/',
        redirect:"main"
    },
    {
        path: '/main',
        name: 'main',
        component: main
    }]
const router = new Router({
    routes: routeMap
})

export default router
