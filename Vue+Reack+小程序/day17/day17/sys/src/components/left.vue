<template>
  <div class="left">
    <router-link to="/index/manage" active-class="select" v-if="type=='0'">管理员管理</router-link>
    <router-link to="/index/user" active-class="select" v-if="type=='0'||type=='1'">用户管理</router-link>
    <router-link to="/index/news" active-class="select">通知管理</router-link>
    <router-link to="/index/device" active-class="select">设备管理</router-link>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
        type:localStorage.getItem("type")
    };
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.left {
  width: 150px;
  background: $info;

  a {
    display: block;
    text-align: center;
    color: $black;
    line-height: $inputHeight;
    text-decoration: none;
  }

  .select {
    background: $primary;
    color: $white;
  }
}
</style>