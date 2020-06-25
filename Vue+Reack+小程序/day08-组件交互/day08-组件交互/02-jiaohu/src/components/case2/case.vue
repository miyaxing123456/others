<template>
  <div>
    <h1>子传父案例</h1>
    <!-- 案例1：删除弹框 -->
   <v-order></v-order>
   <v-shop></v-shop>
    
    <hr>

    <!-- 案例2：加入购物车弹框 -->
    <button @click="isShowPicker=true">加入购物车</button>
    <p>name:{{name}}</p>
    <!-- 加入购物车的弹框 -->
    <v-picker v-if="isShowPicker" @close="isShowPicker=false"
    @change="changeName"
    ></v-picker>
  </div>
</template>
<script>
import vOrder from "./order"
import vShop from "./shop"
import vPicker from "./picker"
export default {
  props: [],
  components: {
      vOrder,
      vShop,
      vPicker
  },
  data() {
    return {
        isShowPicker:false,//picker状态
        name:"妲己"
    };
  },
  mounted() {},
  methods:{
      changeName(e){
          console.log("changeNAME")
          this.name=e;
      }
  }
};
</script>
<style lang="css">
</style>