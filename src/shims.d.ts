/*
 * @Author: litfa
 * @Date: 2022-03-13 17:37:28
 * @LastEditTime: 2022-04-15 17:53:57
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
  readonly VITE_Jijian_appid: string,
  readonly VITE_Fs_Url: string,
  readonly VITE_Page_Url: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}