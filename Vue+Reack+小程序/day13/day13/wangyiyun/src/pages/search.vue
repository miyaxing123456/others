<template>
  <div>
    <h1>搜索页面</h1>
    <!-- 搜索的输入框 -->
    <div class="input-wrapper">
      <input type="text" placeholder="请输入关键词" />
      <button>搜索</button>
    </div>

    <!-- 搜索热搜词汇 -->
    <div class="hot">
      <h2>热搜词：</h2>
      <div class="hot-kw">
          <!-- 4.遍历热搜词汇 -->
        <span v-for="item in hots" :key="item.first">{{item.first}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { requestHot } from "../util/request";
export default {
  props: [],
  components: {},
  data() {
    return {
        //3.初始化数据
        hots:[]
    };
  },
  mounted() {
    //1.画静态页
    //2.一进来页面，就有热搜词汇展示
    requestHot().then(res=>{
        this.hots=res.data.result.hots
    })
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