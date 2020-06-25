<template>
  <div>
    <!-- 
      1.创建项目
      2.定义路由出口
      3.创建了3个组件，配置一级路由规则 login movie movieDetail
      4.在backStage启动node: node app.js
      5.login.vue画了静态页
      6.配置了代理 config/index.js 
      7.安装axios，引入 
      8.点击登录，发送数据请求。
     -->

    <router-view></router-view>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="css" scoped>
</style>