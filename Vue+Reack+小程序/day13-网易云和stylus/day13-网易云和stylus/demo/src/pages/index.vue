<template>
  <div>
    <h1 class="text-center">入口页</h1>
    <footer>
      <a class="select">首页</a>
      <a>订单</a>
    </footer>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import "../stylus/index.styl";
h1 {
  color $info
  font-size $h3

}
footer {
  width 100vw 
  height $lineHeight 
  background $third-color
  position fixed
  left 0
  bottom 0
  display flex
}
a{
  font-size $p 
  color $font-color1 
  line-height $lineHeight
  flex 1 
  text-align center
}
.select {
  background  $info 
  color $font-color-select
}
</style>