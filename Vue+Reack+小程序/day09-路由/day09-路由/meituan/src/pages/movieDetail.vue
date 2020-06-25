<template>
  <div>
    <h1>电影详情页面</h1>
    <go-back></go-back>
  </div>
</template>
<script>
export default {
  mounted() {
    var id = this.$route.query.id;
    console.log(this.$route);
    
    console.log(id);
    //ajax
  }
};
</script>
<style lang="css" scoped>
</style>