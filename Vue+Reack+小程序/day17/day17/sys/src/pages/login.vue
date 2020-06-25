<template>
  <div class="mask">
    <div class="con">
      <el-row>
        <h3 class="text-center text-primary h2">登录</h3>
      </el-row>
      <el-row>
        <el-col :span="4" class="text-black">角色</el-col>
        <el-col :span="20">
          <el-select v-model="user.type" clearable>
            <el-option v-for="item in types" :key="item.val" :label="item.show" :value="item.val"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="text-black">账号</el-col>
        <el-col :span="20">
          <el-input v-model="user.name" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="text-black">密码</el-col>
        <el-col :span="20">
          <el-input v-model="user.pass" show-password clearable></el-input>
        </el-col>
      </el-row>
      <el-row class="text-center">
        <el-button type="primary" class="btn-primary" @click="login">登录</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
import { requestLogin } from "../util/request";
import { successAlert, errorAlert } from "../util/alert";
export default {
  props: [],
  components: {},
  data() {
    return {
      user: {
        type: "", //角色
        name: "", //账号
        pass: "" //密码
      },
      types: [
        {
          show: "超级管理员",
          val: "0"
        },
        {
          show: "普通管理员",
          val: "1"
        },
        {
          show: "用户",
          val: "2"
        }
      ]
    };
  },
  methods: {
    login() {
      //发起登录请求
      requestLogin(this.user).then(res => {
        //登录成功
        if (res) {
          //用来标识是否登录
          localStorage.setItem("isLogin",true)

          //存用户角色 0-超管 1-普管 2-用户
          localStorage.setItem("type",res.data.isAdmin)

          successAlert(res.data.info);
          this.$router.push("/index");
        } 
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.mask {
  width: 100vw;
  height: 100vh;
  background: $info;
  position: fixed;
  left: 0;
  top: 0;

  .con {
    width: 400px;
    padding: $padding;
    background: $default;
    border-radius: $radius;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .el-row {
    margin-bottom: $margin;
    
  }

  .el-col {
    line-height: $inputHeight;
  }
}
</style>