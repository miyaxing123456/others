<template>
  <div>
    <h3>电影页面</h3>
    <go-back></go-back>
    <to-search></to-search>
    <!-- 2.遍历数据，通过?传参 -->
    <ul>
      <li
        class="item"
        is="router-link"
        :to="'/movieDetail?movieId='+item.id"
        v-for="item in movies"
        :key="item.id"
      >
        <h4>名称：{{item.name}}</h4>
        <p>价格：{{item.price|filterPrice}}</p>
        <p>时间：{{item.time|filterTime}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    //1.模拟数据
    return {
      movies: [
        {
          id: "1",
          name: "我和我的祖国",
          price: 39.9,
          time: 1589770737106
        },
        {
          id: "2",
          name: "大话西游",
          price: 40,
          time: 1583770737106
        },
        {
          id: "3",
          name: "寄生虫",
          price: 19.99,
          time: 1579770737106
        }
      ]
    };
  },
  mounted() {},
  beforeCreate() {
    console.log("movie beforeCreate")
  },
  //如果来的路径是/index/home,就进来；如果不是，就去/index/home
  //进来组件之前
  beforeRouteEnter(to, from, next) {
    //不能使用this,不能使用当前组件的数据和方法。
    console.log("movie beforeRoute Enter")
    if (from.path === "/index/home" || from.path === "/movieDetail") {
      next();
    } else {
      next("/index/home");
    }
  },
  beforeRouteUpdate(){
    //组件自己路由更新了
  },
  //组件离开之前 在这里可以使用this和当前组件的数据和方法
  beforeRouteLeave (to, from, next) {
    if(to.path=="/movieDetail"||to.path=="/index/home"){
      next()
    }
  }
};
</script>
<style lang="css" scoped>
.item {
  background: pink;
  margin: 0.2rem;
  display: block;
}
h4 {
  font-size: 0.3rem;
  line-height: 0.6rem;
}
</style>