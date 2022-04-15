/*
 * @Author: litfa
 * @Date: 2022-04-15 17:34:33
 * @LastEditTime: 2022-04-15 17:34:59
 * @LastEditors: litfa
 * @Description: 获取所有站点
 * @FilePath: /web/src/apis/getAllSite.ts
 * 
 */
import request from '@/utils/request'
export default (): any => {
  return request({
    method: 'POST',
    url: '/getAllSite'
  })
}