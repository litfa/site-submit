<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:37:59
 * @LastEditTime: 2022-04-15 16:48:25
 * @LastEditors: litfa
 * @Description: Home
 * @FilePath: /web/src/pages/Home.vue
 * 
-->
<script lang="ts" setup>
import Sites from '@/components/Sites/Sites.vue'
import New from '@/components/New/New.vue'
import MySite from '@/components/MySite/MySite.vue'
</script>

<template>
  <div class="Home">
    <Sites></Sites>
    <div class="cards">
      <New></New>
      <MySite></MySite>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Home {
  display: flex;
}
</style>