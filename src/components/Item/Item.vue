<!--
 * @Author: litfa
 * @Date: 2022-04-15 17:35:43
 * @LastEditTime: 2022-04-15 18:23:17
 * @LastEditors: litfa
 * @Description: item
 * @FilePath: /web/src/components/Item/Item.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import { Right } from '@icon-park/vue-next'
const props = defineProps(propNames)
const url = import.meta.env.VITE_Page_Url
</script>

<template>
  <a :href="`//${host}.${url}`" target="_black">
    <div class="Item">
      <span class="name">{{ name }}</span>
      <span class="url">http://{{ host }}.{{ url }}</span>
      <span>{{ desc }}</span>
      <div>
        <right class="go" theme="outline" size="16" fill="#000000" :strokeWidth="3" />
      </div>
    </div>
  </a>
</template>

<style lang="less" scoped>
a {
  color: #000;
  text-decoration: none;
}
.Item {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 180px;
  height: 100px;
  margin: 10px;
  padding: 15px;
  border: 1px #aaaa solid;
  border-radius: 15px;
  box-shadow: -3px 3px 15px 0 rgba(170, 170, 170, 0.307);
  cursor: pointer;
  transition: all 1s;
  :deep(svg) {
    transition: all 0.3s;
  }
  &:hover {
    box-shadow: -5px 5px 15px 0 rgba(124, 124, 124, 0.592);
    :deep(.go svg) {
      transform: translate(5px);
    }
  }
  .name {
    font-size: 20px;
    font-weight: 600;
    // 溢出隐藏
    overflow: hidden;
    // 溢出的文本呈现为省略号
    text-overflow: ellipsis;
    // 禁止文本换行
    white-space: nowrap;
  }
  .url {
    font-size: 12px;
  }
}
</style>