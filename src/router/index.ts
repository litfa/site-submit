
/*
 * @Author: litfa
 * @Date: 2022-04-09 18:36:46
 * @LastEditTime: 2022-04-13 17:08:35
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
    path: '/new',
    component: () => import('@/pages/New.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router