import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'BlusaView',
        component: () => import('../views/Blusa.vue')
    },
    {
        path: '/t-shirt',
        name: 'TshirtView',
        component: () => import('../views/Tshirt.vue')
    },
    {
        path: '/saia',
        name: 'SaiaView',
        component: () => import('../views/Saia.vue')
    },
    {
        path: '/vestido',
        name: 'VestidoView',
        component: () => import('../views/Vestido.vue')
    },
    {
        path: '/acessorios',
        name: 'AcessoriosView',
        component: () => import('../views/Acessorios.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router