<template>
  <div>
    <h3>1.router-link</h3>
    <router-link to="/movie">电影</router-link>
    <router-link to="/food">外卖</router-link>
    <router-link to="/index/order">订单</router-link>

    <h3>2.this.$router.push("你的路径")</h3>
    <button @click="toMovie()">点击跳转至电影</button>
    <button @click="toFood">点击跳转至外卖</button>

    <h3>3.this.$router.replace("你的路径")</h3>
    <button @click="toMovie2()">点击跳转至电影</button>
    <button @click="toFood2">点击跳转至外卖</button>

    <hr>
    <p>router-link和$router.push()都是添加一条新的历史记录；
        $router.replace()是用新的历史记录替换当前历史记录</p>

    <v-search></v-search>
  </div>
</template>
<script>
export default {
  methods: {
    toMovie() {
      this.$router.push("/movie");
    },
    toFood() {
      this.$router.push("/food");
    },
    toMovie2() {
      this.$router.replace("/movie");
    },
    toFood2() {
      this.$router.replace("/food");
    }
  }
};
</script>
<style lang="css" scoped>
h3 {
  font-size: 0.3rem;
  line-height: 0.8rem;
  color: red;
}
p{
    color: blue;
    font-size: 0.3rem;
}
</style>