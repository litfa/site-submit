<!--
 * @Author: litfa
 * @Date: 2022-04-14 15:23:16
 * @LastEditTime: 2022-04-15 19:57:58
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
console.log(counter)

</script>

<template>
  <div class="Sites">
    <template v-if="goodList.length > 0">
      <h1>优秀站点</h1>
      <div class="box">
        <Item
          v-for="i in goodList"
          :key="i.id"
          v-bind="i"
          :showAny="counter.permissions >= 15"
        >{{ i.name }}</Item>
      </div>
    </template>
    <h1>所有站点</h1>
    <div class="box">
      <Item
        v-for="i in list"
        :key="i.id"
        v-bind="i"
        :showAny="counter.permissions >= 15"
      >{{ i.name }}</Item>
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
  .box {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 10px;
    padding: 10px;
  }
}
</style>