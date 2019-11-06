<!--
 * @Author: your name
 * @Date: 2019-11-03 15:46:54
 * @LastEditTime: 2019-11-03 16:06:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quanzi\src\components\Header.vue
 -->
<template>
  <header>
    <span>&lt;</span>
    <input type="text" />
  </header>
</template>

<script>
export default {};
</script>

<style lang='scss'>
header {
  height: 40px;
  line-height: 40px;
  background: red;
  display: flex;
//   justify-content: space-between;
  span {
    width: 50px;
    text-align: center;
  }
  input {
    width: 75%;
    height: 30px;
    margin-top: 5px;
    border: 0;
    border-radius: 15px;
  }
}
</style>