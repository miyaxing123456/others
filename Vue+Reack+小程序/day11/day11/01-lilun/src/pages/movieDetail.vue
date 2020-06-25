<template>
  <div>
    <!-- 3.展示数据 -->
    <h1>电影详情页面</h1>
    <h3>名称：{{detail.name}}</h3>
    <p>导演：{{detail.director}}</p>
    <p>年份：{{detail.year}}</p>
  </div>
</template>
<script>
import {requestMovieDetail} from "../util/request"
export default {
  data() {
    return {
      //2.初始化数据
      detail: {}
    };
  },
  mounted() {
    //1.一进来页面就要获取id，根据id发起请求，得到电影的详情信息
    var id = this.$route.query.id;
   requestMovieDetail(id).then(res => {
      if(res.data.isok){
        this.detail = res.data.detail;
      }else{
        alert(res.data.info)
      }
      
    });
  }
};
</script>
<style lang="css" scoped>
</style>