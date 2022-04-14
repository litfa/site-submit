<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:37:59
 * @LastEditTime: 2022-04-14 16:32:28
 * @LastEditors: litfa
 * @Description: Home
 * @FilePath: /web/src/pages/Home.vue
 * 
-->
<script lang="ts" setup>
import Sites from '@/components/Sites/Sites.vue'
import New from '@/components/New/New.vue'
</script>

<template>
  <div class="Home">
    <Sites></Sites>
    <New></New>
  </div>
</template>

<style lang="less" scoped>
.Home {
  display: flex;
}
</style>