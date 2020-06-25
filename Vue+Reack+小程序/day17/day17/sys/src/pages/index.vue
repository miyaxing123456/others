<template>
  <div class="index">
    <v-header></v-header>
    <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>
<script>
import vHeader from "../components/header"
import vLeft from "../components/left"
import vRight from "../components/right"
export default {
  props: [],
  components: {
    vHeader,
    vLeft,
    vRight
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.index 
  width 100vw 
  height 100vh 
  display flex 
  flex-direction column 
  .main 
    flex 1 
    display flex
</style>