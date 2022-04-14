/*
 * @Author: litfa
 * @Date: 2022-04-14 14:34:42
 * @LastEditTime: 2022-04-14 14:39:23
 * @LastEditors: litfa
 * @Description: 登录
 * @FilePath: /web/src/apis/login.ts
 * 
 */
import request from '@/utils/request'
export default (mobile: number, token: string) => {
  return request({
    method: 'POST',
    url: '/login/',
    data: {
      mobile, token
    }
  })
}
