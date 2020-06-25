<template>
  <div class="picker" @click.self="close">
      <div class="picker-con">
          <span @click="close">关闭</span>
          <h3>这是商品规格</h3>

          <button @click="change('王昭君')">王昭君</button>
          <button @click="change('大乔')">大乔</button>
      </div>
  </div>
</template>
<script>
export default {
  methods:{
      //关闭
      close(){
          this.$emit("close")
      },
      change(name){
          //通知父组件修改name
          this.$emit("change",name)
      }
  }
};
</script>
<style lang="css">
.picker{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
}
.picker-con{
    width: 100vw;
    height: 300px;
    position: absolute;
    left:0px;
    bottom:0px;
    background: pink;
}
</style>