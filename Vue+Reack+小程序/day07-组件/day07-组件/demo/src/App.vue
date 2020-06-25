<template>
  <div class="app">
    <v-header></v-header>
    <v-main></v-main>
  </div>
</template>

<script>
// 1.引入header组件
import header from "./components/header";
import main from "./components/main";
export default {
  //2.局部注册
  components: {
    vHeader: header,
    vMain: main
  },
  data(){
    return {
      name:"app"
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
