<template>
  <div>
    <h1>电影列表</h1>
    <!-- 4.遍历数据 -->
    <div v-for="item in movies" :key="item.id" @click="toDetail(item.id)">{{item.name}}</div>
  </div>
</template>
<script>
import {requestMovie} from "../util/request"
export default {
  data() {
    return {
      //2.定义一个数据接收
      movies: []
    };
  },
  mounted() {
    //1.一进来页面就要获取所有的电影列表
    requestMovie().then(res => {
      //3.赋值
      this.movies = res.data.movies;
    });
  },
  methods:{
    //5.跳转到movieDetail,而且还要传参id
    toDetail(id){
      this.$router.push("/movieDetail?id="+id)
    }
  }
};
</script>
<style lang="css" scoped>
</style>