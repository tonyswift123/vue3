import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {useStore,Store} from 'vuex'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'find',
    component: ()=>import('@/views/find/index.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: ()=>import('@/views/map/index.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: ()=>import('@/views/order/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
