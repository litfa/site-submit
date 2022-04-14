/*
 * @Author: litfa
 * @Date: 2022-04-14 17:42:04
 * @LastEditTime: 2022-04-14 17:50:42
 * @LastEditors: litfa
 * @Description: 检查域名可用性
 * @FilePath: /web/src/apis/checkHost.ts
 * 
 */
import request from '@/utils/request'
export default (host: string): any => {
  return request({
    method: 'POST',
    url: '/newSite/check',
    data: {
      host
    }
  })
}
