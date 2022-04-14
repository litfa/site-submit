/*
 * @Author: litfa
 * @Date: 2022-04-14 15:11:45
 * @LastEditTime: 2022-04-14 15:12:21
 * @LastEditors: litfa
 * @Description: 设置用户信息
 * @FilePath: /web/src/apis/setInfo.ts
 * 
 */
import request from '@/utils/request'
export default (username: string) => {
  return request({
    method: 'POST',
    url: '/setInfo/',
    data: {
      username
    }
  })
}
