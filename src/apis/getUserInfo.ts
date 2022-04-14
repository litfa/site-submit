/*
 * @Author: litfa
 * @Date: 2022-04-14 15:50:08
 * @LastEditTime: 2022-04-14 15:59:52
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /web/src/apis/getUserInfo.ts
 * 
 */
import request from '@/utils/request'
export default () => {
  return request({
    method: 'POST',
    url: '/getUserInfo/'
  })
}
