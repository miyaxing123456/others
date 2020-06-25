<template>
  <div>
    <h1>排行榜</h1>
    <to-search></to-search>
    <!-- 3.画静态页 -->
    <h2>官方榜</h2>
    <div class="top">
      <!-- 4.arr的前4条使用top-item遍历，从下标是4的那条开始，使用bottom-item进行遍历 -->

      <div class="top-item" v-for="item in arr4" :key="item.id" @click="toList(item.id)">
        <div class="left">
          <img :src="item.coverImgUrl" alt />
          <p>{{item.updateFrequency}}</p>
        </div>
        <div class="right">
          <p v-for="(i,idx) in item.tracks" :key="i.first">{{idx+1}}.{{i.first}} - {{i.second}}</p>
        </div>
      </div>
    </div>

    <h3>推荐榜</h3>
    <div class="bottom">
      <div class="bottom-item" v-for="item in arrBottom" :key="item.id" @click="toList(item.id)">
        <div class="left img-wrapper">
          <img :src="item.coverImgUrl" alt />
          <p>{{item.updateFrequency}}</p>
        </div>
        <p class="info">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { requestTopList } from "../util/request";
export default {
  props: [],
  components: {},
  data() {
    return {
      // 2。初始数据
      arr: []
    };
  },
  mounted() {
    //1.发起请求
    requestTopList().then(res => {
      this.arr = res.data.list;
    });
  },
  computed: {
    //5.分开遍历
    arr4() {
      return this.arr.filter((item, index) => index < 4);
    },
    arrBottom() {
      return this.arr.filter((item, index) => index >= 4);
    }
  },
  methods: {
    //6.跳转至歌曲列表
    toList(id) {
      this.$router.push("/list?id=" + id);
    }
  }
};
</script>
<style lang="css" scoped>
h2 {
  font-size: 30px;
  line-height: 60px;
  color: blue;
}
.top-item {
  padding: 0 0.3rem;
  margin-bottom: 0.3rem;
  display: flex;
}
.top-item .left,
.bottom .left {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-right: 0.3rem;
  position: relative;
}
.left img {
  width: 100%;
  height: 100%;
}
.left p {
  width: 100%;
  height: 0.5rem;
  font-size: 0.26rem;
  text-align: center;
  line-height: 0.5rem;
  overflow: hidden;
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.right {
  flex: 1;
}
.right p {
  font-size: 0.24rem;
  line-height: 0.5rem;
  color: #666;
}
.bottom {
  overflow: hidden;
}
.bottom-item {
  float: left;
  width: 33.33%;
  height: 2.9rem;
  padding: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
}
.bottom-item .img-wrapper {
  width: 100%;
}
.bottom .info {
  text-align: center;
  line-height: 0.5rem;
  overflow: hidden;
  height: 0.5rem;
}
</style>