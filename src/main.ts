import './class-component-hooks'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/assets/style/common/common.scss'

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)

app.config.globalProperties.$http = () => {
  //
  console.log('$http')
}
app.config.globalProperties.$http2 = () => {
  //
  console.log('$http2')
}
app.mount('#app')
