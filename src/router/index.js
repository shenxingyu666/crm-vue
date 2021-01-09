import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/main"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/main/index.vue'),
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('../views/index/index.vue')
            },

            {
                path: 'supplier',
                name: 'supplier',
                component: () => import('../views/supplier/index.vue')
            },
            {
                path: '/order',
                name: 'order',
                component: () => import('../views/order/index.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
  routes
})

export default router
