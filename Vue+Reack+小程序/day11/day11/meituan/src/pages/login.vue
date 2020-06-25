<template>
  <div>
    <h3>这是登录页面</h3>
    <div>角色：
      <select v-model="type">
        <option value="" disabled>--请选择--</option>
        <option value="0">超级管理员</option>
        <option value="1">电影管理员</option>
        <option value="2">外卖管理员</option>
      </select>
    </div>
    <div>账号：<input type="text" v-model="user.name"></div>
    <div>密码：<input type="text" v-model="user.pass"></div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:{
        name:"",//账号
        pass:"",//密码
      },
      type:"",//角色
    };
  },
  methods:{
    login(){
      if(this.type===""){
        alert("请选择角色");
        return;
      }
      if(this.user.name==="admin"&&this.user.pass=="123"){
        //登录成功的时候添加一个标识，当访问所有的路由的时候，看看有没有这个标识。
        //localStorage存入的内容都会变成字符串。
        //localStorage.getItem("isLogin") 如果没有存过，取到null;如果存过了，就会取出来存的值
        localStorage.setItem("isLogin",1);


        //存角色的标识
        localStorage.setItem("type",this.type)


        this.$router.push("/index")
      }else{
        alert("账号或者密码错误！")
      }
    }
  }
};
</script>
<style lang="css" scoped>
input{
  border: 1px solid #333;
}
</style>