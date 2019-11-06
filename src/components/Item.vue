<!--
 * @Author: your name
 * @Date: 2019-11-03 16:15:09
 * @LastEditTime: 2019-11-03 16:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quanzi\src\components\Item.vue
 -->
<template>
  <div class="item">
    <div class="top">
      <img src="/img/pic1.png" alt />
      <p>
        <span>张俊杰</span>
        <span>2019-06-01</span>
      </p>
      <span>收藏</span>
    </div>
    <div class="mid">
      <div class="mid-img">
        <img src="/img/pic1.png" alt />
        <img src="/img/pic1.png" alt />
      </div>
      <p>一家人烧烤真的好开心</p>
    </div>
    <div class="bot">
      <span>赞 34</span>
      <span>收藏 34</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.item {
  padding: 10px;
  .top {
    height: 45px;
    overflow: hidden;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      float: left;
    }
    p {
      float: left;
      span {
        float: left;
      }
    }
    span {
      float: right;
    }
  }
  .mid{
      p{
          color: #868383
      }
  }
  .bot {
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
  }
}
</style>