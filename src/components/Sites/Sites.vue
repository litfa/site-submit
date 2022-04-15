<!--
 * @Author: litfa
 * @Date: 2022-04-14 15:23:16
 * @LastEditTime: 2022-04-15 19:07:31
 * @LastEditors: litfa
 * @Description: 网站
 * @FilePath: /web/src/components/Sites/Sites.vue
 * 
-->
<script lang="ts" setup>
import Item from '../Item/Item.vue'
import getAllSiteApi from '@/apis/getAllSite'
import { ref } from 'vue'
import { computed } from '@vue/reactivity'
import { useCounterStore } from '@/store/index'
const counter = useCounterStore()
const list = ref([])
const getAllSite = async () => {
  const { data: res } = await getAllSiteApi()
  list.value = res.data
}
getAllSite()

// 优质的
const goodList = computed(() => {
  return list.value.filter(e => {
    return e.is_good
  })
})
</script>

<template>
  <div class="Sites">
    <h1>所有站点</h1>
    <div class="all">
      <Item v-for="i in list" :key="i.id" v-bind="i" :showAny="true">{{ i.name }}</Item>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Sites {
  min-width: 200px;
  width: 100%;
  background-color: #fff;
  margin: 10px;
  h1 {
    margin: 20px;
  }
  .all {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 10px;
    padding: 10px;
  }
}
</style>