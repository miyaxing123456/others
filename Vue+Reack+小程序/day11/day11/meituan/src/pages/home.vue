<template>
  <div class="home">
    <h3>首页</h3>
    <hr />
    <v-del></v-del>
    <h3>1.router-link</h3>
    <router-link to="/movie">电影</router-link>
    <router-link to="/food">外卖</router-link>
    
    <hr />
    <h3>2.$router.push()</h3>
    <button @click="$router.push('/movie')">电影</button>
    <button @click="$router.push('/food')">外卖</button>

    <hr />
    <h3>3.$router.replace()</h3>
    <button @click="$router.replace('/movie')">电影</button>
    <button @click="$router.replace('/food')">外卖</button>

    <hr>
    <to-search></to-search>
  </div>
</template>
<script>
export default {
  mounted() {
    window.onclick=()=>{
      console.log("window click")
    }
  },
  beforeDestroy() {
    window.onclick=null;
  },
};
</script>
<style lang="css" scoped>
.home{
  min-height: 100vh;
  background: orange;
}
</style>