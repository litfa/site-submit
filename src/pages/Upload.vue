<!--
 * @Author: litfa
 * @Date: 2022-04-14 20:41:12
 * @LastEditTime: 2022-04-15 16:28:19
 * @LastEditors: litfa
 * @Description: 上传文件
 * @FilePath: /web/src/pages/Upload.vue
 * 
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import getSiteApi from './../apis/getSite'
import { PreviewOpen, Upload } from '@icon-park/vue-next'
import getFsKey from '@/apis/getFsKey'
const route = useRoute()

let siteData = ref<any>({})

const getSite = async () => {
  let id = route.query.id
  if (!id) {
    return
  }
  let { data: res } = await getSiteApi(Number(id))
  siteData.value = res.data[0]
}

getSite()

// 打开文件管理
const openFs = async () => {
  const { data: res } = await getFsKey(siteData.value.host)
  let key = res.key
  window.open(`${import.meta.env.VITE_Fs_Url}/${key}`)
}
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
    <div class="url">{{ siteData.host }}.litf.com.cn</div>
    <div>
      <a :href="`http://${siteData.host}.litf.com.cn`" target="_black">
        <el-button type="primary">
          <preview-open theme="outline" size="16" fill="#fff" />查看站点
        </el-button>
      </a>

      <el-button type="primary" @click="openFs">
        <upload theme="outline" size="16" fill="#fff" />上传文件
      </el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Upload {
  max-width: 800px;
  height: 500px;
  background-color: #fff;
  padding: 15px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  :deep(a) {
    text-decoration: none;
    margin-right: 15px;
  }
  .el-steps {
    margin: 5px 0;
    width: 80%;
  }
  .url {
    font-size: 26px;
    margin: 15px 0;
  }
}
</style>