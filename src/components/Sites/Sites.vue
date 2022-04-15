<!--
 * @Author: litfa
 * @Date: 2022-04-14 15:23:16
 * @LastEditTime: 2022-04-15 17:52:03
 * @LastEditors: litfa
 * @Description: 网站
 * @FilePath: /web/src/components/Sites/Sites.vue
 * 
-->
<script lang="ts" setup>
import Item from '../Item/Item.vue'
import getAllSiteApi from '@/apis/getAllSite'
import { ref } from 'vue'
const list = ref([])
const getAllSite = async () => {
  const { data: res } = await getAllSiteApi()
  list.value = res.data
}
getAllSite()
</script>

<template>
  <div class="Sites">
    <Item v-for="i in list" :key="i.id" v-bind="i">{{ i.name }}</Item>
  </div>
</template>

<style lang="less" scoped>
.Sites {
  min-width: 200px;
  width: 100%;
  background-color: #fff;
  margin: 10px;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .Item:last-child {
    margin-right: auto;
  }
}
</style>