<!--
 * @Author: litfa
 * @Date: 2022-04-15 16:43:16
 * @LastEditTime: 2022-04-15 17:25:06
 * @LastEditors: litfa
 * @Description: 我的网站
 * @FilePath: /web/src/components/MySite/MySite.vue
 * 
-->
<script lang="ts" setup>
import getMySiteApi from '@/apis/getMySite'
import { onMounted, ref } from 'vue'
import { useCounterStore } from '@/store/index'
const counter = useCounterStore()
const siteList = ref([])
const getMySite = async () => {
  const { data: res } = await getMySiteApi(counter.id)
  siteList.value = res.data
}

setTimeout(() => {
  getMySite()
}, 0)
</script>

<template >
  <div class="MySite">
    <h2>我的站点</h2>
    <li v-for="i in siteList" :key="i">
      <a href="#" class="name">{{ i.name }}</a>
      <router-link :to="`/upload?id=${i.id}`">
        <el-button>编辑</el-button>
      </router-link>
    </li>
  </div>
</template>

<style lang="less" scoped>
.MySite {
  width: 240px;
  min-height: 180px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  position: sticky;
  top: 70px;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #000;
      margin: 8px 5px;
      // 溢出隐藏
      overflow: hidden;
      // 溢出的文本呈现为省略号
      text-overflow: ellipsis;
      // 禁止文本换行
      white-space: nowrap;
    }
    .name {
      width: 140px;
    }
  }
}
</style>