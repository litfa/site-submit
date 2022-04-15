/*
 * @Author: litfa
 * @Date: 2022-04-15 19:06:23
 * @LastEditTime: 2022-04-15 19:07:04
 * @LastEditors: litfa
 * @Description: 设置优质
 * @FilePath: /web/src/apis/setGood.ts
 * 
 */
import request from '@/utils/request'
export default (id: number): any => {
  return request({
    method: 'POST',
    url: '/setGood',
    data: {
      id
    }
  })
}