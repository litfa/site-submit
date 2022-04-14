<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:37:59
 * @LastEditTime: 2022-04-14 16:23:38
 * @LastEditors: litfa
 * @Description: Home
 * @FilePath: /web/src/pages/Home.vue
 * 
-->
<script lang="ts" setup>
import Sites from '@/components/Sites/Sites.vue'
import { useCounterStore } from '@/store/index'
const counter = useCounterStore()
</script>

<template>
  <Sites></Sites>
</template>

<style lang="less" scoped>
</style>