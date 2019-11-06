<!--
 * @Author: your name
 * @Date: 2019-11-03 15:14:48
 * @LastEditTime: 2019-11-04 09:39:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \quanzi\src\views\Home.vue
 -->
<template>
  <div class="home">
    <Header />
    {{msg}}
    <router-view class="home-main" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
export default {
  name: "home",
  data(){
    return {
      msg:''
    }
  },
  components: {
    Footer,
    Header
  },
  mounted() {
    axios.get("/detail").then(({data})=>{
        this.msg=data.msg
    })
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main {
    flex: 1;
    overflow: hidden;
  }
}
</style>
