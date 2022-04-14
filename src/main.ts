/*
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-04-14 16:18:13
 * @LastEditors: litfa
 * @Description: main
 * @FilePath: /web/src/main.ts
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import './assets/style/main.less'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
