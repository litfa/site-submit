<!--
 * @Author: litfa
 * @Date: 2022-04-15 17:35:43
 * @LastEditTime: 2022-04-15 17:58:41
 * @LastEditors: litfa
 * @Description: item
 * @FilePath: /web/src/components/Item/Item.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
const url = import.meta.env.VITE_Page_Url
</script>

<template>
  <div class="Item">
    <span class="name">{{ name }}</span>
    <span>http://{{ host }}.{{ url }}</span>
    <el-button>访问</el-button>
  </div>
</template>

<style lang="less" scoped>
.Item {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 180px;
  height: 100px;
  margin: 20px;
  .name {
    font-size: 20px;
  }
}
</style>