/*
 * @Author: litfa
 * @Date: 2022-04-14 15:49:52
 * @LastEditTime: 2022-04-14 16:23:20
 * @LastEditors: litfa
 * @Description: 获取用户信息
 * @FilePath: /web/src/utils/setUserInfo.ts
 * 
 */
import getUserInfo from '@/apis/getUserInfo'
import { useCounterStore } from '@/store/index'
export default async () => {
  const counter = useCounterStore()
  const token = localStorage.getItem('token')
  if (token) {
    const { data: res } = await getUserInfo()
    counter.setInfo({
      isLogin: true,
      id: res.data.id,
      username: res.data.username,
      phone: res.data.phone
    })
  } else {
    counter.setInfo({
      isLogin: false
    })
  }

}