<template>
  <div class="box">
    <h1>this is parent</h1>
    <input type="text" v-model="msg" />
    <h3>msg:{{msg}}</h3>

    <h3>json.msg:{{json.msg}}</h3>
    <input type="text" v-model="json.msg" />

    <v-child2 :info="msg" :obj="json"></v-child2>

    <hr />

    <p>msg:{{msg}}</p>
    <!-- 父传子 父组件通过自定义属性传递，子组件通过props接收 -->
    <v-child :info="msg"></v-child>
    <v-child info="这不是变量"></v-child>

    <hr />
    <v-child v-for="item in arr" :key="item.id" :info="item.name"></v-child>
  </div>
</template>
<script>
import vChild from "./child";
import vChild2 from "./child2";
export default {
  components: {
    vChild,
    vChild2
  },
  data() {
    return {
      msg: "这是父组件的数据",
      json: {
        msg: "优秀是一种习惯！！"
      },
      arr: [
        {
          id: "1",
          name: "妲己"
        },
        {
          id: "2",
          name: "王昭局"
        },
        {
          id: "3",
          name: "大乔"
        }
      ]
    };
  }
};
</script>
<style lang="css" scoped>
h1 {
  color: orange;
}
</style>