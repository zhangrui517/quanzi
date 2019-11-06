<!--
 * @Author: your name
 * @Date: 2019-11-03 15:14:48
 * @LastEditTime: 2019-11-05 15:40:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quanzi\src\views\Login.vue
 *class="iconfont icon-yanjing_bi"
 -->
<template>
  <div class="login">
    {{user}}
    <Header />
    <p>
      <input type="text" placeholder="用户名" v-model="username" />
    </p>
    <p>
      <input :type="type" placeholder="密码" v-model="userpwd" />
      <!-- <span class="iconfont" :class="flag?'icon-yanjing':'icon-yanjing_bi'"></span> -->
      <span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" @click="changeEye"></span>
    </p>
    <p>
      <button @click="submit">登录</button>
    </p>
  </div>
</template>

<script>
import Header from "@/components/Header0";
import {mapMutations,mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  },
  components: {
    Header
  },
  data() {
    return {
      username: "",
      userpwd: "",
      type: "password",
      flag: false //控制眼睛的开闭class
    };
  },
  methods: {
    ...mapMutations(['getUser']),
    /**
     * 点击眼睛
     * 1、改变type属性
     * 2、改变flag
     */
    changeEye() {
      this.flag = !this.flag;
      if (this.flag) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    /**
     * 非空校验
     */
    submit() {
      if (!this.username.trim() || !this.userpwd.trim()) {
        //为空的时候
        alert("不能为空");
      } else {
        //调接口
        this.$axios
          .post("/login", { username: this.username, userpwd: this.userpwd })
          .then(({ data }) => {
            console.log(data);
            if(data.code===0){
              alert(data.msg)
            }else{
              this.getUser(data.data)
              localStorage.token=data.token //存本地，表示已登录
              this.$router.push('/')
            }
          });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  flex-direction: column;
}
</style>