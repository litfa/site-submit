<!--
 * @Author: litfa
 * @Date: 2022-04-14 15:23:16
 * @LastEditTime: 2022-04-14 15:39:23
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
  <div v-for="item in (props.list as list)" :key="item.id">{{ item.username }}</div>
</template>

<style lang="less" scoped>
</style>