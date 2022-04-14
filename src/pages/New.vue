<!--
 * @Author: litfa
 * @Date: 2022-04-13 16:59:31
 * @LastEditTime: 2022-04-14 19:04:11
 * @LastEditors: litfa
 * @Description: 新增站点
 * @FilePath: /web/src/pages/new.vue
 * 
-->
<script lang="ts" setup>
import { reactive, watch, ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import checkHostApi from './../apis/checkHost'
import { LoadingOne } from '@icon-park/vue-next'
const form = reactive({
  name: '',
  desc: '',
  host: ''
})

const host = ref('')
const allow = ref(false)
let checkTimeOut: any = ''
let isLoding = ref(false)

watch(host, (val) => {
  form.host = pinyin(val, {
    toneType: 'none',
    mode: 'surname',
    nonZh: 'consecutive'
  }).replaceAll(' ', '-')

  isLoding.value = true
  clearTimeout(checkTimeOut)
  checkTimeOut = setTimeout(async () => {
    let { data: res } = await checkHostApi(form.host)
    allow.value = res.allow
    isLoding.value = false
  }, 1000)
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<template>
  <div class="New">
    <el-form :model="form" label-width="120px">
      <el-form-item label="网站名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="域名前缀">
        <el-input v-model.trim="host" />
        <span v-show="host !== ''">
          <loading-one theme="outline" size="16" fill="#000" class="rotate" v-show="isLoding" />
          <span
            style="font-size:12px;"
            :style="{ color: allow ? 'green' : 'red' }"
          >{{ allow ? '√ 可用' : '该域名不可用' }}</span>
        </span>
      </el-form-item>
      <el-form-item>{{ form.host }}.litf.com.cn</el-form-item>
      <el-form-item label="介绍">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.New {
  max-width: 800px;
  background-color: #fff;
  padding: 15px;
  margin: 10px auto;
}

.rotate {
  :deep(svg) {
    animation: rotate 1s infinite linear;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>