<!--
 * @Author: litfa
 * @Date: 2022-04-14 20:41:12
 * @LastEditTime: 2022-04-14 20:43:30
 * @LastEditors: litfa
 * @Description: 上传文件
 * @FilePath: /web/src/pages/Upload.vue
 * 
-->
<script lang="ts" setup>

</script>

<template>
  <div class="Upload">
    <el-steps
      :space="200"
      :active="2"
      finish-status="success"
      align-center
      style="justify-content: center;margin-bottom: 20px;"
    >
      <el-step title="注册账号" />
      <el-step title="填写信息" />
      <el-step title="上传文件" />
    </el-steps>
  </div>
</template>

<style lang="less" scoped>
.Upload {
  max-width: 800px;
  background-color: #fff;
  padding: 15px;
  margin: 10px auto;
}
</style>