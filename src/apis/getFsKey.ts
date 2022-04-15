/*
 * @Author: litfa
 * @Date: 2022-04-15 16:22:05
 * @LastEditTime: 2022-04-15 16:30:47
 * @LastEditors: litfa
 * @Description: 获取文件管理密钥
 * @FilePath: /web/src/apis/getFsKey.ts
 * 
 */
import request from '@/utils/request'
export default (host: string): any => {
  return request({
    method: 'POST',
    url: '/getFsAuth',
    data: {
      host
    }
  })
}