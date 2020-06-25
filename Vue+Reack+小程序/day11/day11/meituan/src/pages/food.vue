<template>
  <div>
    <h3>外卖页面</h3>
    <go-back></go-back>
    <to-search></to-search>
    <ul>
      <!-- 2.遍历数据 -->
      <li v-for="item in food" :key="item.id" @click="toDetail(item.id)">
        <h4>店名：{{item.name}}</h4>
        <p>价格：{{item.price|filterPrice}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    //1.模拟数据
    return {
      food: [
        {
          id: "11",
          name: "麻辣烫",
          price: 29.9
        },
        {
          id: "22",
          name: "麻辣小龙虾",
          price: 159.0
        }
      ]
    };
  },
  methods: {
    //3.跳转路由
    toDetail(id) {
      this.$router.push("/foodDetail/" + id);
    }
  },
  beforeRouteEnter(to, from, next) {
    var type = localStorage.getItem("type");
    if (type == "0" || type == "2") {
      next();
    } else {
      next("/login");
    }
  }
};
</script>
<style lang="css" scoped>
li {
  background: orange;
  margin: 0.2rem;
}
h4 {
  font-size: 0.3rem;
  line-height: 0.6rem;
}
</style>