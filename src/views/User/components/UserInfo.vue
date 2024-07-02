<script setup>
import { ref, onBeforeMount, reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import { ElMessage, ElMessageBox } from 'element-plus'

const userStore = useUserStore()
const userInfoTemp = reactive({})
const changeItem = reactive({})

const loadUserInfo = () => {
  for (var key in userStore.userItemList) {
    userInfoTemp[key] = userStore.userInfo[key]
  }
}

const isModified = ref(false)
const codeID_c = ref(0)
const enableSaveButton = () => {
  isModified.value = true
}

const submitChangeUserInfo = async () => {
  for (var key in userInfoTemp) {
    if (userInfoTemp[key] != userStore.userInfo[key]) {
      changeItem[key] = userInfoTemp[key]
    }
  }
  var msg = await userStore.updateUserInfo(changeItem)
  console.log(msg)
  if (msg) {
    ElMessage({ type: 'success', message: msg['msg'] })
  }
  isModified.value = false
}

let dialogVisible = ref(false)
const openDialog = () => {
  dialogVisible.value = true
}

const sendCode = async () => {
  var v_email = { email: userInfoTemp['email'] }
  console.log(v_email)
  codeID_c.value = await userStore.getEmailCode(v_email)
  // 发送验证码的逻辑
  startCountdown()
}
let countdown
const timer = ref(0)
const startCountdown = () => {
  timer.value = 60
  countdown = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      clearInterval(countdown)
    }
  }, 1000)
}
const verificationCode = ref('')
const verifyCode = async () => {
  // 验证验证码的逻辑
  if (codeID_c.value == 0) {
    ElMessage({ type: 'error', message: '请先获取验证码' })
    return
  }
  var data = {
    email: userInfoTemp['email'],
    code: verificationCode.value,
    codeID: codeID_c.value,
  }
  var ret = await userStore.UserVerifyCode(data)
  if (ret) {
    dialogVisible.value = false
    ElMessage({ type: 'success', message: '验证成功' })
  }
}

onBeforeMount(async () => {
  loadUserInfo()
})
</script>
<template>
  <div>
    <h1>个人信息</h1>
    <div class="user-info-page">
      <el-form :model="userInfoTemp" label-width="200px" label-position="left">
        <el-form-item
          v-for="(value, key) in userStore.userItemList"
          :key="key"
          :label="value.label"
        >
          <div
            v-if="value.is_modify == 1"
            style="display: flex; align-items: center"
          >
            <span v-if="key === 'email'" style="margin-right: 20px">{{
              userInfoTemp[key]
            }}</span>
            <el-input
              v-else
              v-model="userInfoTemp[key]"
              @input="enableSaveButton"
            />
            <el-button v-if="key === 'email'" @click="openDialog"
              >修改</el-button
            >
          </div>
          <div v-else>
            <span>{{ userInfoTemp[key] }}</span>
          </div>
        </el-form-item>

        <el-dialog
          v-model="dialogVisible"
          title="修改邮箱"
          size="tiny"
          :append-to-body="true"
        >
          <el-form @submit.native.prevent>
            <el-form-item label="邮箱">
              <el-input v-model="userInfoTemp['email']"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="verificationCode"></el-input>
              <el-button :disabled="timer > 0" @click="sendCode">{{
                timer > 0 ? `${timer}s` : '获取验证码'
              }}</el-button>
            </el-form-item>
            <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="verifyCode">确定</el-button>
            </div>
          </el-form>
        </el-dialog>
        <el-form-item>
          <el-button
            type="primary"
            :disabled="!isModified"
            @click="submitChangeUserInfo"
          >
            保存
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.user-info-page {
  padding-top: 30px;
  margin: auto;
  text-align: center;
  width: 70%;
}
</style>
