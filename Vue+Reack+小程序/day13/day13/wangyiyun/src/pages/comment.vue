<template>
  <div>
    <h1>评论页面</h1>
    <h2>热门评论</h2>
    <div class="hotComment">
     <!-- 2.写了comment-item的静态样式，拆成组件comment-item  -->
     <!-- 4.遍历数据 -->
      <comment-item v-for="item in hotComments" :key="item.commentId"
      :item="item"
      ></comment-item>
    </div>

    <h2>评论</h2>
    <div class="comment">
      <comment-item v-for="item in comments" :key="item.commentId" 
      :item="item"
      ></comment-item>
    </div>
  </div>
</template>
<script>
import { requestComment } from "../util/request";
import commentItem from "../components/comment-item";
export default {
  props: [],
  components: {
    commentItem
  },
  data() {
    return {
        // 3.初始化数据
      comments: [], //评论数据
      hotComments: [] //热门评论数据
    };
  },
  mounted() {
    //1.一进来就获取id,然后根据id发起评论请求
    var id = this.$route.query.id;
    requestComment(id).then(res => {
      this.comments = res.data.comments;
      this.hotComments = res.data.hotComments;
    });
  }
};
</script>
<style lang="css" scoped>
h2 {
  font-size: 0.3rem;
  line-height: 0.6rem;
  color: blue;
}
</style>