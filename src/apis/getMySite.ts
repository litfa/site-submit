/*
 * @Author: litfa
 * @Date: 2022-04-15 17:04:40
 * @LastEditTime: 2022-04-15 17:21:40
 * @LastEditors: litfa
 * @Description: 获取用户的网站
 * @FilePath: /web/src/apis/getMySite.ts
 * 
 */
import request from '@/utils/request'
import { useCounterStore } from '@/store/index'
export default (id?: number): any => {
  const counter = useCounterStore()
  return request({
    method: 'POST',
    url: '/getUserSite',
    data: {
      author: id || counter.id
    }
  })
}