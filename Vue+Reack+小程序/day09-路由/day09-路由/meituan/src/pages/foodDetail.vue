<template>
  <div>
    <h1>food detail</h1>
    <go-back></go-back>
  </div>
</template>
<script>
export default {
  
  mounted() {
    console.log(this.$route)
    var id=this.$route.params.id;
    //ajax
  }
};
</script>
<style lang="css" scoped>
</style>