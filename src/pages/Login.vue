<!--
 * @Author: litfa
 * @Date: 2022-04-13 18:25:40
 * @LastEditTime: 2022-04-13 19:57:16
 * @LastEditors: litfa
 * @Description: 注册账号
 * @FilePath: /web/src/pages/Login.vue
 * 
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref()

const numberValidateForm = reactive({
  phone: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login(numberValidateForm.phone)
    } else {
      return false
    }
  })
}

// 验证规则
const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

const rules = reactive({
  phone: [{ validator: validatePhone, trigger: 'blur' }]
})

const login = (phone) => {
  Jijian.verify({
    appId: import.meta.env.VITE_Jijian_appid, // 应用appId
    show: 'dialog', // 包括 inner，dialog两种方式
    option: 'jijian', // 当 show='inner' 时，此处传元素的 id；当 show='dialog' 时，此值为 null；
    mobile: phone, // 用户手机
    success: function (mobile, token) {
      console.log('极简验证-验证成功', mobile, token)
    },
    onshow: function (qrcode) {
      console.log('极简验证-二维码展示')
    },
    cancel: function () {
      console.log('极简验证-用户取消')
    },
    fail: function (msg) {
      console.log('极简验证-验证失败', msg)
    }
  })
}

</script>

<template>
  <el-form
    ref="formRef"
    :model="numberValidateForm"
    label-width="60px"
    class="login-box"
    :rules="rules"
  >
    <h2>登录/注册</h2>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model.number="numberValidateForm.phone" type="text" autocomplete="off" />
    </el-form-item>
    <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
    <span>新用户将自动注册</span>
  </el-form>
</template>

<style lang="less" scoped>
.login-box {
  min-width: 300px;
  max-width: 500px;
  height: 200px;
  background-color: #fff;
  padding: 15px;
  margin: 0 auto;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>