<!--
 * @Author: litfa
 * @Date: 2022-04-14 15:44:46
 * @LastEditTime: 2022-04-15 16:43:35
 * @LastEditors: litfa
 * @Description: 新增网站
 * @FilePath: /web/src/components/New/New.vue
 * 
-->
<script lang="ts" setup>
import { useCounterStore } from '@/store/index'
const counter = useCounterStore()
</script>

<template>
  <div class="New">
    <h2>提交作业</h2>
    <router-link to="/new" v-if="counter.isLogin">
      <el-button type="primary" round>立即提交</el-button>
    </router-link>
    <router-link to="/login" v-else>
      <el-button type="primary" round>登录后提交</el-button>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.New {
  width: 240px;
  height: 180px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;

  :deep(a) {
    width: 100%;
    text-decoration: none;
    button {
      width: 100%;
    }
  }
  h2 {
    margin: 15px 0;
  }
}
</style>