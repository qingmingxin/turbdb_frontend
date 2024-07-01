<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
const formData = ref({
  pwd_old: '',
  pwd_new: '',
  pwd_re: '',
})

const clearFormData = () => {
  Object.keys(formData.value).forEach((key) => {
    formData.value[key] = ''
  })
}

const rules = {
  pwd_old: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6~20', trigger: 'blur' },
  ],
  pwd_new: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6~20', trigger: 'blur' },
  ],
  pwd_re: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6~20', trigger: 'blur' },
    {
      trigger: 'blur',
      validator: (rule, val, callback) => {
        if (formData.value.pwd_new === val) {
          return callback()
        } else {
          return callback(new Error('两次密码不一致'))
        }
      },
    },
  ],
}
const userStore = useUserStore()
const pwdChangeFormRef = ref(null)
const doChangePwd = () => {
  const { pwd_old, pwd_new, pwd_re } = formData.value
  pwdChangeFormRef.value
    .validate()
    .then(async (valid) => {
      if (valid) {
        var msg = await userStore.changePwd({ pwd_old, pwd_new, pwd_re })
        if (msg) {
          ElMessage({ type: 'success', message: msg['msg'] })
          clearFormData()
        }
      }
    })
    .catch((error) => {
      if ('response' in error) {
        ElMessage.error(error.response.data.error)
      } else {
        ElMessage.error('请检查表单输入')
        console.log(error)
      }
    })
}
</script>

<template>
  <div class="pwd_change_page">
    <h1>修改密码</h1>
    <el-form
      class="pwd_change_container"
      :rules="rules"
      label-width="200px"
      :model="formData"
      ref="pwdChangeFormRef"
    >
      <el-form-item label="旧密码" prop="pwd_old">
        <el-input v-model="formData.pwd_old" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pwd_new">
        <el-input v-model="formData.pwd_new" type="password"></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码" prop="pwd_re">
        <el-input v-model="formData.pwd_re" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" @click="doChangePwd">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
.pwd_change_page {
  padding-top: 10px;
  margin: auto;
  text-align: center;
  width: 50%;
  .pwd_change_container {
    padding-top: 30px;
    .btn {
      width: 100%;
    }
  }
}
</style>
