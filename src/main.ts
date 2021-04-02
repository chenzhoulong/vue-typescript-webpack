import Vue from 'vue'
import App from '@/App.vue'
import http from '@/http'
import router from '@/router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/css/layout.scss'
import store from '@/store'
import '@/icons'
import '@/mock'

Vue.use(Element)
Vue.prototype.$http = new http
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
