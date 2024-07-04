<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const userStore = useUserStore()

const registeFormRef = ref(null)
const getVerifyCodeBtnText = ref('获取验证码')
const isEmailValid = ref(false) // 默认邮箱格式不正确
const getVerifyCodeBtnDisabled = ref(true) // 默认禁用获取验证码按钮
const countdown = ref(0)
const registeFormData = ref({
  username: '',
  email: '',
  password: '',
  re_password: '',
  code: '',
  codeID: 0,
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      min: 3,
      max: 20,
      message: '用户名长度为：3~20',
      trigger: 'blur',
    },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      type: 'email',
      message: '邮箱格式有误',
      trigger: 'blur',
      validator: (rule, val, callback) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(val)) {
          isEmailValid.value = false
          getVerifyCodeBtnDisabled.value = true
          return Promise.reject('邮箱格式有误')
        } else {
          isEmailValid.value = true
          getVerifyCodeBtnDisabled.value = false
          return Promise.resolve()
        }
      },
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6~20', trigger: 'blur' },
  ],
  re_password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6~20', trigger: 'blur' },
    {
      trigger: 'blur',
      validator: (rule, val, callback) => {
        if (registeFormData.value.password === val) {
          return callback()
        } else {
          return callback(new Error('两次密码不一致'))
        }
      },
    },
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
}

onMounted(() => {
  // 在页面加载时检查是否存在缓存的倒计时时间
  const cachedCountdown = sessionStorage.getItem('countdown')
  if (cachedCountdown) {
    countdown.value = Math.max(0, Number(cachedCountdown))
    startCountdown()
  }
})

onUnmounted(() => {
  console.log('onUnmounted')
  // 在页面卸载时保存当前倒计时时间到 sessionStorage
  sessionStorage.setItem('countdown', String(countdown.value))
})

const startCountdown = () => {
  getVerifyCodeBtnDisabled.value = true
  const timer = setInterval(() => {
    countdown.value -= 1
    getVerifyCodeBtnText.value = countdown.value + ' 秒后重试'
    if (countdown.value <= 0) {
      clearInterval(timer)
      getVerifyCodeBtnDisabled.value = false
      getVerifyCodeBtnText.value = '获取验证码'
    }
  }, 1000)
}

// 注册按钮事件
const doRegiste = async () => {
  registeFormRef.value
    .validate()
    .then(async () => {
      const { username, email, password, re_password, code, codeID } =
        registeFormData.value
      console.log(code)
      await userStore.userRegister({
        username,
        email,
        password,
        re_password,
        code,
        codeID,
      })
      console.log('registe')
      ElMessage.success('注册成功')
      countdown.value = 0
      router.push('/')
    })
    .catch((e) => {
      console.log(e)
      ElMessage.error('请检查表单输入')
    })
}

//获取验证码按钮事件
const getVerifyCode = async () => {
  countdown.value = 60 // 重置倒计时
  registeFormData.value.codeID = await userStore.getEmailCode({
    email: registeFormData.value.email,
  })
  if (registeFormData.value.codeID === 0) {
    ElMessage.error('验证码获取失败')
  } else {
    ElMessage.success('验证码获取成功')
    startCountdown()
  }
}
</script>

<template>
  <div class="registe-container">
    <div class="registe-wrapper">
      <div class="header">用户注册</div>
      <el-form
        ref="registeFormRef"
        :rules="rules"
        :model="registeFormData"
        :hide-required-asterisk="true"
      >
        <el-form-item label="用户名" prop="username" label-width="100px">
          <el-input
            v-model="registeFormData.username"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email" label-width="100px">
          <el-input
            v-model="registeFormData.email"
            placeholder="请输入邮箱（每个邮箱只能注册一个账号）"
            clearable
          />
        </el-form-item>

        <el-form-item label="验证码" label-width="100px">
          <el-col :span="9">
            <el-form-item prop="code">
              <el-input
                v-model="registeFormData.code"
                placeholder="请输入验证码"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-button
              class="btn-get-verify"
              @click="getVerifyCode"
              type="primary"
              :disabled="!isEmailValid || getVerifyCodeBtnDisabled"
              >{{ getVerifyCodeBtnText }}</el-button
            >
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="100px">
          <el-input
            v-model="registeFormData.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="re_password" label-width="100px">
          <el-input
            v-model="registeFormData.re_password"
            type="password"
            placeholder="请再次输入密码确认"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button class="btn" @click="doRegiste">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registe-container {
  background-color: aqua;
  text-align: center;
  height: calc(100vh - 70px);
  background-image: linear-gradient(to right, #5bedfb, #5f91e9);

  .registe-wrapper {
    background-color: #fff;
    width: 458px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
  }

  .a-group {
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
  }

  .input-item {
    display: block;
    // width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;

    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color))
        inset;
      cursor: default;
      width: 100%;
      text-align: center;
    }
  }

  .btn {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: 20px;
    background-image: linear-gradient(to right, #5bedfb, #5f91e9);
    color: #fff;
  }

  .msg {
    text-align: center;
    line-height: 80px;
  }

  a {
    text-decoration-line: none;
    color: #abc1ee;
  }
}
</style>
