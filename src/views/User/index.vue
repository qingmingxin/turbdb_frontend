<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const userAvatar = ref('path/to/avatar.jpg') // 替换为实际路径
const username = ref('用户名')
const router = useRouter()

function navigateTo(route) {
  router.push(`/person${route}`)
}
const imageUrl = ref('')
const getBase64ImageURL = (base64Data) => {
  const byteCharacters = atob(base64Data)
  const byteArrays = []

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i))
  }

  const byteArray = new Uint8Array(byteArrays)
  const blob = new Blob([byteArray], { type: 'image/jpeg' })

  return URL.createObjectURL(blob)
}
onBeforeMount(async () => {
  await userStore.userGetInfo()
  var ret = await userStore.getUserAvatar()
  const blob = new Blob([ret])
  const reader = new FileReader()

  reader.onloadend = () => {
    imageUrl.value = reader.result
  }

  reader.readAsDataURL(blob)
  console.log(imageUrl)
  // console.log(ret)
  // console.log(typeof ret)
  // imageUrl.value =  URL.createObjectURL(ret)
  // console.log(imageUrl)
})
</script>

<template>
  <el-container class="personal-page">
    <el-aside class="sidebar">
      <div class="profile">
        <img :src="imageUrl" class="avatar" style="background-size: contain" />
        <h2>{{ userStore.userInfo.username }}</h2>
      </div>
      <el-divider></el-divider>
      <ul class="menu">
        <li @click="navigateTo('')">个人信息</li>
        <li @click="navigateTo('/pwd_change')">修改密码</li>
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
