<template>
  <div class="comment-item">
    <header>
      <img :src="item.user.avatarUrl" alt />
      <p>{{item.user.nickname}}</p>
      <span>{{item.time|filterTime}}</span>
    </header>
    <div class="comment-con">{{item.content}}</div>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style lang="css" scoped>
.comment-item {
  padding: 0.3rem;
  background: #cccccc;
  margin: 0.2rem 0rem;
}
.comment-item header {
  overflow: hidden;
}
.comment-item header img {
  float: left;
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.3rem;
  border-radius: 50%;
}
.comment-item header p {
  float: left;
  font-size: 0.26rem;
  line-height: 0.6rem;
}
.comment-item header span {
  float: right;
  font-size: 0.2rem;
  color: #666;
  line-height: 0.6rem;
}
.comment-item .comment-con {
  font-size: 0.24rem;
  text-indent: 2em;
  margin-top: 0.3rem;
}
</style>