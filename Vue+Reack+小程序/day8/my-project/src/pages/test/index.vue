<template>
   <!--  页面结构  wxml --> 
  <div class="app">
        我是test文件
        <!--  解析data内的数据变量 --> 
        <div>{{ username }}</div>
        <!--  列表渲染  小程序： wx:for   vue:v-for  --> 
        <!-- 小程序： wx:for  在mpvue中不可用 --> 
        <!--<view  wx:for="{{ info }}">
            {{ item }}
        </view> -->
        <view>view组件</view>
         <!-- vue:v-for  在mpvue中可用 ,属性绑定也要使用vue里面绑定方式 --> 

        <div v-for="(item,index) in  info" v-bind:key="index">
            {{ item }}
        </div>
        <!-- 条件渲染： 不能使用wx:if  要使用v-if -->
        <div v-if="onOff">
            我是真的
        </div>
        <div v-else>
            我是假的
        </div>
        <!--
        <image
          src="/static/images/user.png"
        >
        </image>
        <img src="/static/images/user.png"></img>
        -->
        <!-- 事件操作 --> 

       <!-- <button size="mini" type="primary" bindtap="click"> 这个不能触发事件 -->
        <button size="mini" type="primary"  @click ="click(12,$event)" data-name="root">
       <!-- <button size="mini" type="primary"  @click ="click" data-id="100" data-name="admin"> -->
            点击事件
        </button>

  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
        username:"百里守约",
        info:[10,20,30,40],
        onOff:false
    }
  },
  methods: {
    //   自定义的函数的编写/与小程序不同
    click(id,e){
        console.log('click',id,e)
    }
  },
}
</script>

<style lang="css" scoped>

</style>
