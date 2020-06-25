<template>
  <div>
    <div>
      <!-- 路由导航： 修改路由的方式 -->
      <router-link to="/home" active-class="select">首页</router-link>
      <router-link to="/order" active-class="select">订单</router-link>
      <router-link to="/shop" active-class="select">购物车</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>

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
a{
  color:orange;
}
.select{
  background: orange;
  color: #fff;
}
</style>