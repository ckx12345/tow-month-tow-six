import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from 'element-ui'// 引入elementui
import 'element-ui/lib/theme-chalk/index.css'// 引入样式文件

Vue.config.productionTip = false
Vue.use(elementui) // 将element注册到vue实例上便可以全局使用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
