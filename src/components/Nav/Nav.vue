<!--
 * @Author: litfa
 * @Date: 2022-04-14 16:42:08
 * @LastEditTime: 2022-04-14 16:49:39
 * @LastEditors: litfa
 * @Description: 导航栏
 * @FilePath: /web/src/components/Nav/Nav.vue
 * 
-->
<script lang="ts" setup>

</script>

<template>
  <div class="Nav">
    <div class="left">
      <img src="https://www.litf.com.cn/img/logo.c6c317e1.webp" alt="logo" />
      <span>还没想到标题</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Nav {
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  .left {
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
}
</style>