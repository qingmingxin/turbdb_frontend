import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入初始化样式文件
import '@/styles/common.scss'
import VueCodemirror from 'vue-codemirror'
import { basicSetup } from 'codemirror'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(VueCodemirror, {
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 4,
  placeholder: '在这里编写代码',
  extensions: [basicSetup],
})

app.mount('#app')
