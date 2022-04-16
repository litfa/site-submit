<!--
 * @Author: litfa
 * @Date: 2022-04-14 16:42:08
 * @LastEditTime: 2022-04-16 14:23:51
 * @LastEditors: litfa
 * @Description: 导航栏
 * @FilePath: /web/src/components/Nav/Nav.vue
 * 
-->
<script lang="ts" setup>
import { useCounterStore } from '@/store/index'
const counter = useCounterStore()
</script>

<template>
  <div class="Nav">
    <div class="left">
      <router-link to="/">
        <img src="https://www.litf.com.cn/img/logo.c6c317e1.webp" alt="logo" />
        <span>还没想到标题</span>
      </router-link>
    </div>
    <div class="right">
      <template v-if="counter.isLogin">
        <router-link to="/new">
          <el-button type="primary" round>提交网站</el-button>
        </router-link>
      </template>
      <template v-else>
        <router-link to="/login">
          <el-button type="primary" round>登录</el-button>
        </router-link>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Nav {
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  .left,
  .left a {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 80%;
    }
    span {
      font-size: 24px;
      font-weight: 600;
      color: #2c3e50;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>