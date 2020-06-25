<template>
  <div>
    <h1>电影页面</h1>
    <button @click="goBack">自己的返回</button>
    <v-search></v-search>
    <go-back></go-back>
    <hr />
    <h3>router-link</h3>
    <ul>
      <li v-for="item in movies" :key="item.id">
        <router-link :to="'/movieDetail?id='+item.id">{{item.name}}</router-link>
      </li>
    </ul>

    <hr />
    <h3>push</h3>
    <ul>
      <li v-for="item in movies" :key="item.id" @click="toDetail(item.id)">{{item.name}}--{{item.price|priceFilter}}</li>
    </ul>

    <hr>
    <h3>is</h3>
    <ul>
      <li v-for="item in movies" :key="item.id" is="router-link" :to="'/movieDetail?id='+item.id">{{item.name}}--{{item.tel|telFilter}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
    },
    //前往详情
    toDetail(id){
      this.$router.push("/movieDetail?id="+id)
    }
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "我和我的祖国",
          price:30,
          tel:"15423434561"
        },
        {
          id: 2,
          name: "大话西游",
          price:40,
          tel:"15423434561"
        },
        {
          id: 3,
          name: "无问西东",
          price:50,
          tel:"15423434561"
        },
        {
          id: 4,
          name: "寄生虫",
          price:60,
          tel:"15423434561"
        }
      ]
    };
  }
};
</script>
<style lang="css" scoped>
a{
  display: block;
}
h3{
  font-size: 0.3rem;
  line-height: 0.8rem;
  color:blue;
}
</style>