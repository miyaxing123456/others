<template>
  <div>
    <h1>歌曲列表页</h1>
    <!-- <div class="item">
        <img src="http://p1.music.126.net/tbZaE-DjL_BkemynFlL1cQ==/109951163052534918.jpg" alt="">
        <div class="right">
            <h3>纸短情长</h3>
            <p>歌手：张杰 谢娜</p>
        </div>
    </div> -->
    <!-- 3.遍历数据 -->
    <div class="item" v-for="item in arr" :key="item.id" is="router-link" :to="'/play/'+item.id">
        <img :src="item.al.picUrl" alt="">
        <div class="right">
            <h3>{{item.name}}</h3>
            <p>歌手：<span v-for="i in item.ar" :key="i.id">{{i.name}}&nbsp;&nbsp;</span></p>
        </div>
    </div>
  </div>
</template>
<script>
import {requestList} from "../util/request"
export default {
  props: [],
  components: {},
  data() {
    return {
        //2.初始化数据
        arr:[]
    };
  },
  mounted() {
      //1.一进来收到id获取歌单详情
      var id=this.$route.query.id

      //发请求
      requestList(id).then(res=>{
          this.arr=res.data.playlist.tracks
      })
  }
};
</script>
<style lang="css" scoped>
.item{
    margin: 0.2rem 0.3rem;
    width:100vw;
    display: flex;
    height: 2rem;
    background: pink;
}
.item img{
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin: 0.1rem;
    border-radius: 0.3rem;
    
}
.item .right{
    flex: 1;
    margin-top: 0.1rem;
}
</style>