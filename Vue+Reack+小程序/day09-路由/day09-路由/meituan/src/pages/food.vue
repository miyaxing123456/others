<template>
  <div>
    <h1>外卖</h1>
    <go-back></go-back>
    <v-search></v-search>
    <ul>
      <li v-for="item in foods" :key="item.id" 
        is="router-link"
        :to="'/foodDetail/'+item.foodId"
      >{{item.name}}--{{item.price|priceFilter}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foods:[
        {
          foodId:"1",
          name:"麻辣烫",
          price:30
        },
        {
          foodId:"2",
          name:"麻辣香锅",
          price:30
        },
        {
          foodId:"3",
          name:"麻辣小龙虾",
          price:30
        },
      ]
    };
  },
};
</script>
<style lang="css" scoped>
a{
  display: block;
}
</style>