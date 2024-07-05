<script setup></script>

<template>
  <el-container class="database-container">
    <el-container>
      <el-aside width="300px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>民机翼型/机翼湍流信息数据库</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="hyp">
            <template #title>
              <span>高超声速飞行器标模湍流数据</span>
            </template>
            <el-menu-item-group title="DNS数据集">
              <el-menu-item index="1-1">1</el-menu-item>
              <el-menu-item index="1-2">2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="实验数据集">
              <el-menu-item index="1-3">1</el-menu-item>
              <el-menu-item index="1-4">2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>航空发送机典型部件湍流数据</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.database-container {
  width: 80%;
  margin: auto;
  margin-top: 20px;
  height: calc(100vh - 130px);
}
</style>
