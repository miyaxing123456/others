<template>
  <div class="right">
    <h1 class="text-primary h2">{{$route.name}}</h1>
    <router-view></router-view>
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
@import '../stylus/index.styl';

.right {
  flex: 1;
  overflow-x: auto;

  h1 {
    padding: $padding;
  }
}
</style>