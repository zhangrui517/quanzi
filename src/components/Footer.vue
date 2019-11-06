<!--
 * @Author: your name
 * @Date: 2019-11-03 15:14:48
 * @LastEditTime: 2019-11-03 15:46:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editzujia
 * @FilePath: \quanzi\src\components\HelloWorld.vue
 -->
<template>
  <footer>
    <router-link to="/quan" tag='span'>圈子</router-link>
    <router-link to="/my" tag='span'>我的</router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style lang='scss'>
footer {
  height: 40px;
  // background: red;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  span{
    flex: 1;
    text-align: center;
    &.router-link-active{
      background: red;
      color: #fff
    }
  }
}
</style>