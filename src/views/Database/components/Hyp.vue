<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
const menuItems = ref([
  {
    label: 'DNS数据',
    index: '1',
    children: [
      { index: '1-1', label: '1.ma2.25-flatplate', component: 'DnsItem1' },
      { index: '1-2', label: '2.ma6-flatplate', component: 'DnsItem2' },
      { index: '1-3', label: '3.ma8-flatplate-high_Tw', component: 'DnsItem3' },
      { index: '1-4', label: '4.ma8-flatplate-low_Tw', component: 'DnsItem4' },
      { index: '1-5', label: '5.ma6-cone-R1mm', component: 'DnsItem5' },
      { index: '1-6', label: '6.ma6-cone-R10mm', component: 'DnsItem6' },
      {
        index: '1-7',
        label: '7.ma2.9-comression_corner',
        component: 'DnsItem7',
      },
      {
        index: '1-8',
        label: '8.ma6-compression_corner',
        component: 'DnsItem8',
      },
      {
        index: '1-9',
        label: '9.ma2.25-incident_flatplate',
        component: 'DnsItem9',
      },
      {
        index: '1-10',
        label: '10.ma6-swept-compression_corner',
        component: 'DnsItem10',
      },
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

const files = ref([
  {
    name: 'README-average.txt',
    url: '@/views/Database/files/Hy/DNS/README-average.txt',
  },
  {
    name: 'README-grid.txt',
    url: '@/views/Database/files/Hy/DNS/README-grid.txt',
  },
  {
    name: 'README-instant.txt',
    url: '@/views/Database/files/Hy/DNS/README-instant.txt',
  },
  {
    name: 'README-sample.txt',
    url: '@/views/Database/files/Hy/DNS/README-sample.txt',
  },
])

const components = {
  DnsItem1: defineAsyncComponent(() => import('./H/DNS/1.vue')),
  DnsItem2: defineAsyncComponent(() => import('./H/DNS/2.vue')),
  DnsItem3: defineAsyncComponent(() => import('./H/DNS/3.vue')),
  DnsItem4: defineAsyncComponent(() => import('./H/DNS/4.vue')),
  DnsItem5: defineAsyncComponent(() => import('./H/DNS/5.vue')),
  DnsItem6: defineAsyncComponent(() => import('./H/DNS/6.vue')),
  DnsItem7: defineAsyncComponent(() => import('./H/DNS/7.vue')),
  DnsItem8: defineAsyncComponent(() => import('./H/DNS/8.vue')),
  DnsItem9: defineAsyncComponent(() => import('./H/DNS/9.vue')),
  DnsItem10: defineAsyncComponent(() => import('./H/DNS/10.vue')),
  ExpItem1: defineAsyncComponent(() => import('./H/EXP/1.vue')),
  ExpItem2: defineAsyncComponent(() => import('./H/EXP/2.vue')),
}
const downloadFile = (file) => {
  const link = document.createElement('a')
  link.href = file.url
  link.setAttribute('download', file.name)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
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
        >高超声速飞行器标模湍流数据</el-header
      >
      <el-container>
        <el-aside width="20%">
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
          <el-row :gutter="20">
            <el-col :span="20">
              <!-- 左侧组件区域 -->
              <component :is="currentComponent" />
            </el-col>
            <el-col :span="4">
              <!-- 右侧卡片区域 -->
              <el-card style="max-width: 100%; text-align: left">
                <el-link
                  v-for="file in files"
                  :key="file.name"
                  :href="file.url"
                  @click.prevent="downloadFile(file)"
                  style="display: block; margin-bottom: 10px"
                >
                  {{ file.name }}
                </el-link>
              </el-card>
            </el-col>
          </el-row>
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
  width: 90%;
}
</style>
