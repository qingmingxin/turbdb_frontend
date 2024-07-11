<script setup></script>

<template>
  <el-container class="institute">
    <el-aside width="35%">
      <el-row class="tac">
        <el-col>
          <h2 style="text-align: left; padding-left: 20px">研究机构</h2>
          <el-menu
            default-active="/institute/nwpu"
            class="el-menu-vertical-demo"
            router
          >
            <el-menu-item class="el-menu-vertical-demo" index="/institute/nwpu">
              <span>西北工业大学</span>
            </el-menu-item>
            <el-menu-item class="el-menu-vertical-demo" index="/institute/sjtu">
              <span>上海交通大学</span>
            </el-menu-item>
            <el-menu-item class="el-menu-vertical-demo" index="/institute/zju">
              <span>浙江大学</span>
            </el-menu-item>
            <el-menu-item class="el-menu-vertical-demo" index="/institute/hit">
              <span>哈尔滨工业大学</span>
            </el-menu-item>
            <el-menu-item class="el-menu-vertical-demo" index="/institute/caaa">
              <span>中国航天空气动力技术研究院</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main class="institute-main">
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.institute {
  display: flex;
  height: calc(100vh - 100px);
  margin: auto;
  width: 70%;

  .institute-aside {
    border-right: none !important;
  }

  .el-menu-vertical-demo {
    border-right: none !important;
    font-size: $AsideMenuItemSize;
  }

  .institute-main {
    flex-grow: 1;
    overflow: hidden;
    padding-left: 20px;

    .scrollbar-content {
      height: 100%;
      overflow-y: auto;
      padding-bottom: 50px;
    }
  }
}
</style>
