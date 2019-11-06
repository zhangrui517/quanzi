/*
 * @Author: your name
 * @Date: 2019-11-03 15:14:48
 * @LastEditTime: 2019-11-05 15:33:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quanzi\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},//当前登录的对象
  },
  mutations: {
    getUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
