<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

const doLogout = () => {
  console.log("退出")
  userStore.UserLogout()
  ElMessage({ type: 'success', message: "退出成功" })
  router.push('/')

}
function navigateTo() {
  router.push(`/user`);
}
</script>

<template>
  <nav class="app-topnav">
    <div class="app-topnav-content">
      <ul>
        <li>
          <RouterLink to="/">湍流数据库</RouterLink>
        </li>
        <li>
          <RouterLink to="/institute/nwpu">研究机构</RouterLink>
        </li>
        <li><a href="javascript:;">获取数据</a></li>

        <!-- <template v-if="userStore.userInfo.token"> -->
        <template v-if="true">

          <li>
            <RouterLink to="/download">数据下载</RouterLink>
          </li>
          <li>
            <RouterLink to="/job">在线提交</RouterLink>
          </li>

        </template>

        <li>
          <RouterLink to="/article">文章</RouterLink>
        </li>
      </ul>
      <ul>
        <template v-if="userStore.userInfo.token">
          <li><a href="javascript:;"><i class="iconfont icon-account"></i><router-link to="/person">{{ userStore.userInfo.username }}</router-link></a></li>
          <li>
            <el-popconfirm @confirm="doLogout" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
        </template>
        <template v-else>
          <li>
            <RouterLink to="/login">请先登录</RouterLink>
          </li>
          <li>
            <RouterLink to="/registe">注册账号</RouterLink>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  /* 将两个 ul 分别放在两侧 */
  align-items: center;
  /* 可根据需要调整左右边距 */

  width: 100%;

  .app-topnav-content {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;

    ul {
      display: flex;
      height: 50px;
      align-items: center;
      margin: 0;
      padding: 0;

      li {
        a {
          padding: 0 15px;
          color: #cdcdcd;
          line-height: 1;
          display: inline-block;

          i {
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
          }
        }

        ~li {
          a {
            border-left: 2px solid #666;
          }
        }
      }

    }
  }


}
</style>