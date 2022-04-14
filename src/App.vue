<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-04-14 16:44:11
 * @LastEditors: litfa
 * @Description: App
 * @FilePath: /web/src/App.vue
 * 
-->
<script lang="ts" setup>
import setUserInfo from './utils/setUserInfo'
import Nav from './components/Nav/Nav.vue'
setUserInfo()
</script>

<template>
  <Nav></Nav>
  <router-view />
</template>

<style lang="less" scoped>
</style>
