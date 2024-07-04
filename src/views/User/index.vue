<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const userStore = useUserStore()
const imageUrl = ref('')

function handleAvatarSuccess(res, file) {
  imageUrl.value = URL.createObjectURL(file.raw)
  ElMessage({ type: 'success', message: '上传成功' })
  console.log(res)
}
function beforeAvatarUpload(file) {
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    ElMessage({ type: 'error', message: '上传头像图片只能是 JPG或PNG 格式!' })
  }
  if (!isLt2M) {
    ElMessage({ type: 'error', message: '上传头像图片大小不能超过 300KB!' })
  }
  return isJPG && isLt2M
}
let uploadUrl = ref('/api/users/avatar/upload/' + userStore.userInfo.id + '/')
onBeforeMount(async () => {
  await userStore.userGetInfo() 
  var ret = await userStore.getUserAvatar()
  imageUrl.value = ret
})
const token = ref({ Authorization: `Bearer ${userStore.userInfo.token}` })
</script>

<template>
  <el-container class="personal-page">
    <el-aside class="sidebar">
      <div class="profile">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          method="post"
          :headers="token"
          :show-file-list="false"
          :auto-upload="true"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="用户头像" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
        <h2>{{ userStore.userInfo.username }}</h2>
      </div>
      <el-divider></el-divider>
      <ul class="menu">
        <li><RouterLink to="/person">个人信息</RouterLink></li>
        <li>
          <RouterLink to="/person/pwd_change">修改密码</RouterLink>
        </li>
      </ul>
    </el-aside>
    <el-main class="content">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style lang="scss">
.personal-page {
  padding-top: 10px;
  margin: auto;

  height: calc(100vh - 80px);
  text-align: center;
  width: 70%;
}

.sidebar {
  width: 200px;
  padding: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #999;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  background-color: #f0f0f0;
}
.menu {
  list-style-type: none;
  padding: 0;
}

.menu li {
  cursor: pointer;
  margin: 10px 0;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>

<style lang="scss">
.institute {
  padding-top: 10px;
  margin: auto;

  height: calc(100vh - 80px);
  text-align: center;
  width: 70%;
  .institute-main {
    min-width: 800px;
  }
}
</style>
