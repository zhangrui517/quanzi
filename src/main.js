/*
 * @Author: your name
 * @Date: 2019-11-03 15:14:48
 * @LastEditTime: 2019-11-05 14:58:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit '
 * @FilePath: \quanzi\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
