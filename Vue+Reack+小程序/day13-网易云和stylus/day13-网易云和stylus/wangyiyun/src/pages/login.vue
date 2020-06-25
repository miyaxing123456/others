<template>
  <div>
    <!-- 1.画了静态页 -->
    <h1>登录页面</h1>
    <div class="tel">
      <input type="text" placeholder="请输入手机号码" v-model="tel" />
    </div>
    <div class="code">
      <input type="text" placeholder="请输入验证码" v-model="code" />
      <button @click="sendCode" :disabled="info!='发送验证码'">{{info}}</button>
    </div>
    <div class="submit">
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import { requestSendCode, requestVerifyCode } from "../util/request";
export default {
  data() {
    return {
      //2.定义初始数据
      tel: "15737929356", //电话号
      code: "", //验证码
      info: "发送验证码"
    };
  },
  methods: {
    //3.发送验证码
    sendCode() {
      //手机号正则
      const regTel = /^1[3456789]\d{9}$/;
      if (regTel.test(this.tel)) {
        //发送验证码请求
        requestSendCode(this.tel)
          .then(res => {
            alert("验证码发送成功");
            
            //   5.计时器
            var num = 60;
            this.time = setInterval(() => {
              this.info = (num + "").padStart(2, "0") + "秒";
              num--;
              if (num == 0) {
                clearInterval(this.time);
                this.info = "发送验证码";
              }
            }, 1000);
          })
          .catch(error => {
            alert("验证码发送失败");
          });
      } else {
        alert("请输入正确的手机号码");
      }
    },
    //4.登录 验证验证码正确否
    login() {
      //验证验证码正确否 的请求
      requestVerifyCode(this.tel, this.code)
        .then(res => {
          this.$router.push("/index");
        })
        .catch(error => {
          alert("手机号或者验证码错误");
        });
    }
  }
};
</script>
<style lang="css" scoped>
input {
  border: 0.01rem solid #333333;
  font-size: 0.3rem;
  height: 0.6rem;
}
button {
  font-size: 0.3rem;
  line-height: 0.6rem;
  background: #f40;
  color: #fff;
}
.tel,
.code {
  padding: 0rem 0.3rem;
}
.tel input {
  width: 100%;
  display: block;
  margin: 0.1rem auto;
}
.code {
  display: flex;
}
.code input {
  flex: 1;
}
.code button {
  width: 2rem;
}
.submit {
  text-align: center;
}
.submit button {
  padding: 0 0.3rem;
}
</style>