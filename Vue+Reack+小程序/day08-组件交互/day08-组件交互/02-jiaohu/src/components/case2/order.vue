<template>
  <div class="box">
    <h3>这是订单页面</h3>
    <button @click="isShow=true">删除订单</button>

    <!-- 弹框组件 -->
    <v-toast v-if="isShow" title="你确定要删除订单吗？" @cancel="cancelDel"  @queding="confirm"></v-toast>
  </div>
</template>
<script>
import vToast from "./toast";
export default {
  props: [],
  components: {
    vToast
  },
  data() {
    return {
      isShow: false //弹框出现的状态
    };
  },
  mounted() {},
  methods: {
    //取消删除
    cancelDel() {
      this.isShow = false;
    },
    //确定
    confirm(){
        //做删除订单的操作
        console.log("删除订单。。。")
        this.cancelDel()
    }
  }
};
</script>
<style lang="css">
</style>