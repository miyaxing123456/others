<template>
  <div>
    <h1>这是登录页面</h1>
    <!-- 2.绑定数据 -->
    <div>
      <input type="text" placeholder="请输入账号" v-model="user.phone" />
    </div>
    <div>
      <input type="text" placeholder="请输入密码" v-model="user.password" />
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
    <!-- <v-toast :info="info"></v-toast> -->
  </div>
</template>
<script>
import { requestLogin } from "../util/request";
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      //1.初始化值
      user: {
        password: "88888888",
        phone: "13577778888"
      }
    };
  },
  methods: {
    ...mapActions(["changeInfoAction"]),
    // 3.点击了登录
    login() {
      if (this.user.phone === "") {
        this.changeInfoAction("账号不能为空");
        return;
      }

      if (this.user.password === "") {
        this.changeInfoAction("密码不能为空");
        return;
      }

      requestLogin(this.user).then(res => {
        if (res.data.status == 1) {
          this.changeInfoAction("登录成功");
          this.$router.push("/detail");
        } else {
          this.changeInfoAction(res.data.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
</style>