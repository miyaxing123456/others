<template>
  <div>
    <h3>电影详情页面</h3>
    <go-back></go-back>
  </div>
</template>
<script>
export default {
  mounted() {
    const id=this.$route.query.movieId;
    console.log(id)
    //ajax
  }
};
</script>
<style lang="css" scoped>
</style>