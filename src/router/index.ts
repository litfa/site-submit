
/*
 * @Author: litfa
 * @Date: 2022-04-09 18:36:46
 * @LastEditTime: 2022-04-14 20:42:48
 * @LastEditors: litfa
 * @Description: router
 * @FilePath: /web/src/router/index.ts
 * 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/new',
    component: () => import('@/pages/New.vue')
  },
  {
    path: '/upload',
    component: () => import('@/pages/Upload.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router