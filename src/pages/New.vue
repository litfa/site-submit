<!--
 * @Author: litfa
 * @Date: 2022-04-13 16:59:31
 * @LastEditTime: 2022-04-13 17:17:06
 * @LastEditors: litfa
 * @Description: 新增站点
 * @FilePath: /web/src/pages/new.vue
 * 
-->
<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="网站名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="介绍">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
