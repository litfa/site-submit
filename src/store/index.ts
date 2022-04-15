/*
 * @Author: litfa
 * @Date: 2022-04-09 18:48:19
 * @LastEditTime: 2022-04-15 19:17:10
 * @LastEditors: litfa
 * @Description: store
 * @FilePath: /web/src/store/index.ts
 * 
 */
import { defineStore } from 'pinia'

interface userInfo {
  isLogin: false
}
interface userInfo_login {
  isLogin: true
  id: number
  username: string
  phone: string
  permissions: number
}

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      isLogin: false,
      id: -1,
      username: '',
      phone: '',
      permissions: -1
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setInfo(data: userInfo_login | userInfo) {
      this.isLogin = data.isLogin
      if (data.isLogin) {
        this.username = data.username
        this.id = data.id
        this.phone = data.phone
        this.permissions = data.permissions
      }
    }
  }
})