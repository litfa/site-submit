<!--
 * @Author: litfa
 * @Date: 2022-04-13 16:59:31
 * @LastEditTime: 2022-04-14 20:47:51
 * @LastEditors: litfa
 * @Description: 新增站点
 * @FilePath: /web/src/pages/new.vue
 * 
-->
<script lang="ts" setup>
import { reactive, watch, ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import checkHostApi from './../apis/checkHost'
import newSiteApi from './../apis/newSite'
import { LoadingOne } from '@icon-park/vue-next'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
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

const onSubmit = async () => {
  if (!allow.value) return ElMessage.error('该域名不可用')
  if (!form.name) return ElMessage.error('请输入网站名')
  if (!form.desc) return ElMessage.error('请输入介绍')
  let { data: res } = await newSiteApi(form.host, form.name, form.desc)
  if (res.status == 1) {
    if (!form.desc) return ElMessage.success('提交成功')
    setTimeout(() => {
      router.push({
        path: '/upload',
        query: {
          id: res.id
        }
      })
    }, 1000)
  }
}
</script>
<template>
  <div class="New">
    <el-steps
      :space="200"
      :active="1"
      finish-status="success"
      align-center
      style="justify-content: center;margin-bottom: 20px;"
    >
      <el-step title="注册账号" />
      <el-step title="填写信息" />
      <el-step title="上传文件" />
    </el-steps>

    <el-form :model="form" label-width="120px">
      <el-form-item label="网站名称">
        <el-input v-model="form.name" placeholder="例：小明的博客" />
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