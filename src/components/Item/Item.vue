<!--
 * @Author: litfa
 * @Date: 2022-04-15 17:35:43
 * @LastEditTime: 2022-04-16 18:49:17
 * @LastEditors: litfa
 * @Description: item
 * @FilePath: /web/src/components/Item/Item.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import { Right } from '@icon-park/vue-next'
import { defineAsyncComponent } from 'vue'
import setGoodApi from '@/apis/setGood'
import { ElMessage } from 'element-plus'
import Flower from '../Icons/Flower.vue'
const MoreOne = defineAsyncComponent(() => import('@icon-park/vue-next/es/icons/MoreOne'))
const props = defineProps(propNames)
const url = import.meta.env.VITE_Page_Url
const setGood = async () => {
  const { data: res } = await setGoodApi(props.id)
  if (res.status == 1) {
    ElMessage.success('设置成功')
  } else {
    ElMessage.error('设置失败，请稍后再试')
  }
  emits('setGood')
}
const emits = defineEmits(['setGood'])
</script>

<template>
  <a :href="`//${host}.${url}`" target="_black">
    <div class="Item" :class="{ is_good: props.is_good }">
      <template v-if="is_good">
        <Flower class="flower"></Flower>
      </template>
      <el-popover placement="top-start" :width="200" trigger="hover" v-if="showAny">
        <template #reference>
          <more-one class="more" theme="outline" size="14" fill="#000000" :strokeWidth="3" />
        </template>
        <h3>更多操作</h3>
        <el-button @click="setGood">设置/取消优秀网站</el-button>
      </el-popover>
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
  width: 200px;
  // height: 105px;
  margin: 10px;
  padding: 15px;
  border: 1px #aaaa solid;
  border-radius: 15px;
  box-shadow: -3px 3px 15px 0 rgba(170, 170, 170, 0.307);
  cursor: pointer;
  transition: all 1s;
  position: relative;
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
    // 溢出隐藏
    overflow: hidden;
    // 溢出的文本呈现为省略号
    text-overflow: ellipsis;
    // 禁止文本换行
    white-space: nowrap;
  }
  &.is_good {
    border-color: #42b983;
    box-shadow: -3px 3px 15px 0 rgba(103, 153, 78, 0.307);
    &:hover {
      box-shadow: -5px 5px 15px 0 rgba(108, 152, 85, 0.375);
    }
  }
  .flower {
    position: absolute;
    width: 30px;
    height: 30px;
    right: -15px;
    top: -15px;
  }
}
</style>