<template>
  <div>
    <h1>{{$route.name}}</h1>
    <!-- index 的2级路由出口 -->
    <transition 
    enter-active-class="animate__animated animate__fadeIn"
    >
      <router-view></router-view>
    </transition>
    <footer>
      <router-link to="/index/home" active-class="select">首页</router-link>
      <router-link to="/index/order" active-class="select">订单</router-link>
      <router-link to="/index/mine" active-class="select">我的</router-link>
    </footer>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="css" scoped>
footer {
  width: 100vw;
  height: 0.8rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #cccccc;
  display: flex;
}
footer a {
  flex: 1;
  text-align: center;
  line-height: 0.8rem;
}
.select {
  background: #f40;
  color: #fff;
}
</style>