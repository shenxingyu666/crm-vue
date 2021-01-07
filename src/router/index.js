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
        component: () => import('../views/main/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
  routes
})

export default router
