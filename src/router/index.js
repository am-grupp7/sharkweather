import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/topten',
        name: 'TopTen',
        component: () =>
            import(/* webpackChunkName: "topten" */ '../views/TopTen.vue'),
    },
    {
        path: '/tempforecast',
        name: 'TempForecast',
        component: () =>
            import(
                /*webpackChunkName: "tempforecast" */ '../views/TempForecast.vue'
            ),
    },

    {
        path: '/precipforecast',
        name: 'PrecipForecast',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/PrecipForecast.vue'
            ),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
