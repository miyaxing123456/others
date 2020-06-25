<template>
  <div>
    <h3>外卖详情页面</h3>
    <go-back></go-back>
  </div>
</template>
<script>
export default {
  mounted() {
    var foodId=this.$route.params.foodId;
    console.log(foodId)
    //ajax
  }
};
</script>
<style lang="css" scoped>
</style>