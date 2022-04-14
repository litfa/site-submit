/*
 * @Author: litfa
 * @Date: 2022-04-14 20:23:51
 * @LastEditTime: 2022-04-14 20:25:02
 * @LastEditors: litfa
 * @Description: 新增网站
 * @FilePath: /web/src/apis/newSite.ts
 * 
 */
import request from '@/utils/request'
export default (host: string, name: string, desc: string) => {
  return request({
    method: 'POST',
    url: '/newSite/',
    data: {
      host, name, desc
    }
  })
}
