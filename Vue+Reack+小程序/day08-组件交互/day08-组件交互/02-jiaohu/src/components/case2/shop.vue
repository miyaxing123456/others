<template>
  <div class="box">
    <h3>这是购物车页面</h3>
    <button @click="show=true">删除商品</button>
    <!-- 删除弹框 -->
    <v-toast 
        v-if="show" 
        @cancel="cancel" 
        title="你确定要删除该商品吗？" 
        @queding="confirm"
    ></v-toast>
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
      show: false //弹框的状态
    };
  },
  mounted() {},
  methods: {
    //取消删除
    cancel() {
      this.show = false;
    },
    //确定
    confirm(){
        console.log("删除商品。。。")
        this.cancel()
    }
  }
};
</script>
<style lang="css">
</style>