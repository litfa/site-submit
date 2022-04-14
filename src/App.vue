<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-04-14 16:16:03
 * @LastEditors: litfa
 * @Description: App
 * @FilePath: /web/src/App.vue
 * 
-->
<script lang="ts" setup>
import setUserInfo from './utils/setUserInfo'
setUserInfo()
</script>

<template>
  <router-view />
</template>

<style lang="less" scoped>
</style>
