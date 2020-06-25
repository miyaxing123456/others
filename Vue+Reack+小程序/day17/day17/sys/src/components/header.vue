<template>
  <div class="header">
    <el-button type="primary" class="btn-primary" @click="logout">退出登录</el-button>
  </div>
</template>
<script>
import { requestExit } from "../util/request";
import { successAlert } from "../util/alert";
export default {
  methods: {
    logout() {
      //删除登录的标识
      localStorage.removeItem("isLogin")
      localStorage.removeItem("type")

      successAlert("退出成功");
      requestExit().then(res => {});
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.header {
  height: 150px;
  background: $default;
}
</style>