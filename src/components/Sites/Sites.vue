<!--
 * @Author: litfa
 * @Date: 2022-04-14 15:23:16
 * @LastEditTime: 2022-04-14 16:39:23
 * @LastEditors: litfa
 * @Description: 网站
 * @FilePath: /web/src/components/Sites/Sites.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
interface list {
  id: number
  username: string,
  user_id: number
  host: string
  index: string
  date: string
}
</script>

<template>
  <div class="Sites"></div>
</template>

<style lang="less" scoped>
.Sites {
  min-width: 200px;
  width: 100%;
  background-color: #fff;
  margin: 10px;
  min-height: 100vh;
}
</style>