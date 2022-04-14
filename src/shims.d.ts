/*
 * @Author: litfa
 * @Date: 2022-03-13 17:37:28
 * @LastEditTime: 2022-04-13 18:46:58
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /web/src/shims.d.ts
 * 
 */

declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module 'prismjs'
declare module 'vue3-eventbus'
declare module 'Jijian'
declare const Jijian: any
interface ImportMetaEnv {
  readonly VITE_Jijian_appid: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}