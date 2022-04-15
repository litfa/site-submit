/*
 * @Author: litfa
 * @Date: 2022-04-14 20:52:29
 * @LastEditTime: 2022-04-14 21:08:37
 * @LastEditors: litfa
 * @Description: 获取站点信息
 * @FilePath: /web/src/apis/getSite.ts
 *
 */
import request from '@/utils/request'
export default (id: number): any => {
  return request({
    method: 'POST',
    url: '/getSite',
    data: {
      id
    }
  })
}