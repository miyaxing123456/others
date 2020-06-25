<template>
  <div class="mask" @click.self="cancel">
    <div class="con">
      <h3>{{title}}</h3>
      <button @click="cancel">取消</button>
      <button @click="confirm">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    //取消
    cancel() {
      //通知父组件把相应值改了 触发一个自定义事件
      this.$emit("cancel");
    },
    //确定
    confirm(){
        //弹框自己不知道要删除什么，通知父组件，该删除了
        this.$emit("queding")
    }
  }
};
</script>
<style lang="css" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
}
.con {
  width: 300px;
  padding: 20px;
  background: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
}
</style>