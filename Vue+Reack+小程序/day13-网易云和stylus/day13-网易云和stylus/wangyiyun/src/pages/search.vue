<template>
  <div>
    <h1>搜索页面</h1>
    <!-- 搜索的输入框 -->
    <div class="input-wrapper">
      <input type="text" placeholder="请输入关键词" v-model="kw" @keydown.enter="search" />
      <button @click="search">搜索</button>
    </div>

    <!-- 搜索热搜词汇 -->
    <div class="hot" v-if="kw==''">
      <h2>热搜词：</h2>
      <div class="hot-kw">
        <!-- 4.遍历热搜词汇 -->
        <span v-for="item in hots" :key="item.first" @click="clickHot(item.first)">{{item.first}}</span>
      </div>
    </div>

    <!-- 6.遍历搜索的结果 -->
    <ul>
      <li @click="toPlay(item.id)" v-for="item in songs" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { requestHot, requestSearch } from "../util/request";
export default {
  props: [],
  components: {},
  data() {
    return {
      //3.初始化数据
      hots: [], //热搜结果
      kw: "", //输入关键词
      songs: [] //搜索的结果
    };
  },
  mounted() {
    //1.画静态页
    //2.一进来页面，就有热搜词汇展示
    requestHot().then(res => {
      this.hots = res.data.result.hots;
    });
  },
  methods: {
    //搜索
    search() {
      //5.根据kw发起搜索请求
      this.songs = [];
      requestSearch(this.kw).then(res => {
        this.songs = res.data.result.songs;
      });
    },
    //7.点击某首歌曲，跳转至播放页面
    toPlay(id) {
      this.$router.push("/play/" + id);
    },
    //8.点击热搜
    clickHot(con) {
      this.kw = con;
      this.search();
    }
  },
  watch: {
    kw() {
      if (this.kw == "") {
        this.songs = [];
      }
    }
  }
};
</script>
<style lang="css" scoped>
.input-wrapper {
  display: flex;
  padding: 0.2rem;
}
.input-wrapper input {
  flex: 1;
  border: 0.01rem solid #333333;
  font-size: 0.3rem;
  height: 0.6rem;
}
.input-wrapper button {
  width: 2rem;
  font-size: 0.3rem;
  line-height: 0.6rem;
  background: #f40;
  color: #fff;
}
.hot h2 {
  font-size: 0.3rem;
  line-height: 0.6rem;
}
.hot .hot-kw {
  overflow: hidden;
}
.hot span {
  float: left;
  padding: 0.1rem 0.2rem;
  border: 0.01rem solid #666;
  border-radius: 0.3rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  margin: 0 0.2rem 0.2rem;
}
</style>