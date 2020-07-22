import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './util/bus'
import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from './util/server'
Vue.use(antdv)
Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
