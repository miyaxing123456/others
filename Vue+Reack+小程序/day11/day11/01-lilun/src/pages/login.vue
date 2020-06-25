<template>
  <div>
    <h1>登录页面</h1>
    <div>
      账号：
      <input type="text" v-model="user.name" />
    </div>
    <div>
      密码：
      <input type="text" v-model="user.pass" />
    </div>
    <div>
      <button @click="login">提交</button>
    </div>
  </div>
</template>
<script>
import { requestLogin, x } from "../util/request";
export default {
  data() {
    return {
      user: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    login() {
      //把账号和密码提交给后端验证 ajax   8080--3000
      requestLogin(this.user).then(res => {
        if (res.data.isok) {
          this.$router.push("/movie");
        } else {
          alert(res.data.info);
        }
      });
      /*$.ajax({
        url:"/api/login",
        method:"post",
        data:{
          name:this.user.name,
          pass:this.user.pass
        },
        success(d){
          console.log(d)
        }
      })*/
    }
  }
};
</script>
<style lang="css" scoped>
</style>