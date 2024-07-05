<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
const menuItems = ref([
  {
    label: 'DNS数据',
    index: '1',
    children: [
      { index: '1-1', label: '1.数据', component: 'DnsItem1' },
      { index: '1-2', label: '2.数据', component: 'DnsItem2' },
    ],
  },
  {
    label: 'EXP数据',
    index: '2',
    children: [
      { index: '2-1', label: '1.数据', component: 'ExpItem1' },
      { index: '2-2', label: '2.数据', component: 'ExpItem2' },
    ],
  },
])

const components = {
  DnsItem1: defineAsyncComponent(() => import('./HK/DNS/1.vue')),
  DnsItem2: defineAsyncComponent(() => import('./HK/DNS/2.vue')),
  ExpItem1: defineAsyncComponent(() => import('./HK/EXP/1.vue')),
  ExpItem2: defineAsyncComponent(() => import('./HK/EXP/2.vue')),
}
const activeMenu = ref('1-1')
const currentComponent = ref('DnsItem1')

const handleMenuClick = (index) => {
  const selectedMenuItem = menuItems.value
    .flatMap((item) => item.children)
    .find((child) => child.index === index)

  if (selectedMenuItem) {
    currentComponent.value = components[selectedMenuItem.component]
    activeMenu.value = index
  }
}
onMounted(() => {
  // 默认加载 DNS 的第一个子项
  handleMenuClick('1-1')
})
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header style="font-weight: bolder; font-size: 30px"
        >航空发动机典型部件湍流数据</el-header
      >
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            unique-opened
          >
            <el-sub-menu
              v-for="item in menuItems"
              :key="item.index"
              :index="item.index"
            >
              <template #title>{{ item.label }}</template>
              <el-menu-item
                v-for="child in item.children"
                :key="child.index"
                :index="child.index"
                @click="handleMenuClick(child.index)"
              >
                {{ child.label }}
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <component :is="currentComponent" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  padding: 10px 0;
  text-align: center;
  margin: auto;
  width: 70%;
}
</style>
