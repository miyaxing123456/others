<template>
  <div class="order">
    <h3>这是order</h3>
    <router-link to="/movie">电影</router-link>
    <hr />
    <button @click="show=!show">点击切换toast组件</button>
    <!-- 
      v-show 的false是不会触发toast的卸载过程,也不会再次触发mounted 
    v-if 的false是会触发toast的卸载过程,如果再true,那么会再次触发mounted
    -->
    <v-toast v-if="show"></v-toast>

    <hr />
    <button @click="showCase=true">登录</button>
    <toast-case info="登录成功" v-if="showCase" @hide="showCase=false"></toast-case>

    <button @click="addShow=true">加入购物车</button>
    <toast-case info="加入购物车成功" v-if="addShow" @hide="addShow=false"></toast-case>

    <button @click="delShow=true">删除</button>
    <toast-case info="删除成功" v-if="delShow" @hide="delShow=false"></toast-case>
  </div>
</template>
<script>
import vToast from "../components/toast";
import toastCase from "../components/toast-case";
export default {
  components: {
    vToast,
    toastCase
  },
  data() {
    return {
      show: true,
      showCase: false,
      addShow: false, //加入购物车弹框
      delShow: false //删除弹框
    };
  }
};
</script>
<style lang="css" scoped>
.order {
  min-height: 100vh;
  background: lime;
}
</style>