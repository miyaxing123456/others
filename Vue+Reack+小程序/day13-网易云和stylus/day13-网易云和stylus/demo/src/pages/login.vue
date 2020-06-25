<template>
  <div class="login">
    <h1 class="text-center">登录</h1>
    <div class="ipt">
      <div class="ipt-wrapper">
        <input type="text" class="ipt-info" />
      </div>
      <div class="btn-wrapper">
        <button class="btn-info">发送验证码</button>
      </div>
    </div>
    <!-- <div class="mask"></div> -->

    <button class="btn-info login-btn" @click="$router.push('/index')">登录</button>
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

.login {
  h1 {
    color: $info;
    font-size: $h2;
    margin-top: $margin;
  }

  .ipt {
    overflow: hidden;

    .ipt-wrapper {
      width: 60%;
      float: left;
    }

    .btn-wrapper {
      float: left;
      width: 30%;
    }
  }

  .login-btn {
    margin: $margin auto;
  }
  .mask {
    mask()  
  }
}
</style>