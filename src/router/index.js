/*
 * @Author: your name
 * @Date: 2019-11-03 15:14:48
 * @LastEditTime: 2019-11-05 14:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quanzi\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Home'),
    redirect:'/quan',
    children:[
      {
        path:'quan',
        component:()=>import('../views/home/Quan')
      },
      {
        path:'my',
        component:()=>import('../views/home/My')
      }
    ]
  },{
    path:'/login',
    component:()=>import('../views/Login'),
    meta:{title:'登录'}
  },{
    path:'/register',
    component:()=>import('../views/Register'),
    meta:{title:'注册'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
