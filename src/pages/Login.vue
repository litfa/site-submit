<!--
 * @Author: litfa
 * @Date: 2022-04-13 18:25:40
 * @LastEditTime: 2022-04-14 16:15:27
 * @LastEditors: litfa
 * @Description: 注册账号
 * @FilePath: /web/src/pages/Login.vue
 * 
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import loginApi from '@/apis/login'
import setInfoApi from '@/apis/setInfo'
import getUserInfo from '@/utils/setUserInfo'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

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
    async success(mobile, token) {
      const { data: res } = await loginApi(mobile, token)
      if (res.status == 1) {
        localStorage.setItem('token', res.token)
        getUserInfo()
        ElMessage.success('登录成功!')
        // 登录
        if (res.type == 'login') {
          setTimeout(() => {
            router.push('/')
          }, 3000)
        } else {
          // 新用户
          dialogTableVisible.value = true
        }

      } else {
        ElMessage.error('登录失败!' + JSON.stringify(res))
      }
    },
    // onshow: function (qrcode) {
    //   console.log('极简验证-二维码展示')
    // },
    cancel() {
      ElMessage.warning('取消登录')
    },
    fail(msg) {
      ElMessage.error('验证失败!' + msg)
    }
  })
}

const dialogTableVisible = ref(false)
const username = ref('')

const setUserInfo = async () => {
  if (username.value == '') return ElMessage.warning('请输入姓名!')
  let { data: res } = await setInfoApi(username.value)
  if (res.status == 1) {
    dialogTableVisible.value = false
    getUserInfo()
    ElMessage.success('注册成功!')
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }
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
  <el-dialog v-model="dialogTableVisible" title="注册账号">
    姓名：
    <el-input placeholder="请输入您的姓名" v-model="username" style="margin: 20px 0;" />
    <el-button type="text" @click="setUserInfo">确定</el-button>
  </el-dialog>
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