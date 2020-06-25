<template>
  <div>
    <h1>这是详情页面</h1>
    <div class="banner">这是一个轮播图</div>

    <!-- 1.详情和评价的切换，使用isXiang控制显示的内容和选中的样式 -->
    <div class="nav">
      <div class="nav-item" @click="isXiang=true" :class="[isXiang?'nav-item-select':'']">商品详情</div>
      <div class="nav-item" @click="isXiang=false" :class="[!isXiang?'nav-item-select':'']">商品评价</div>
    </div>
    <div v-if="isXiang">商品详情内容</div>

    <!-- 商品评论内容 -->
    <div v-else>
      <!-- 2.评论导航 -->
      <div class="comment-nav">
        <div
          class="comment-nav-item"
          v-for="(item,index) in arr"
          :key="item"
          :class="[num===index?'comment-nav-item-select':'']"
          @click="num=index"
        >{{item}}</div>
      </div>

      <!-- 评价具体内容 -->
      <div v-for="item in comments" :key="item.postDescribe">{{item.postDescribe}}</div>
    </div>

    <!-- 加入购物车 -->
    <button @click="isAdd=true">加入购物车</button>
    <v-picker v-if="isAdd" @close="isAdd=false" :detail="detail"></v-picker>

    <!-- 补充理论知识 -->
    <p>{{json}}</p>
    <button @click="x30">点击把x变为30</button>
    <button @click="addName">添加name属性</button>
    <p>{{testArr}}</p>
    <button @click="change50">age30</button>
  </div>
</template>
<script>
import { requestDetail } from "../util/request";
import vPicker from "../components/picker";
import Vue from 'vue'
export default {
  components: {
    vPicker
  },
  data() {
    return {
      isXiang: false,
      arr: ["全部", "好评", "差评", "晒单"], //评论导航数据
      num: 0, //导航第几个被选中
      detail: {}, //详情
      isAdd: false, //picker的状态

      //是个理论知识
      json:{
        x:10,
        y:20
      },
      testArr:[
        {
          name:'qqq'
        },
        {
          name:"www"
        }
      ]
    };
  },
  mounted() {
    //请求的详情的数据
    requestDetail().then(res => {
      this.detail = res.data.data;

      // buySelect 每一项数据有2个字段，分别是name和list,我们想要实现点击哪个span，给他加select类名。
      // 所以需要给每一条数据添加一个记录第几项被选中的字段num,默认是0
      this.detail.buySelect.forEach(item => {
        item.num = 0;
      });
      console.log(this.detail.buySelect);
    });


    // 理论
    this.testArr.forEach(item=>{
      item.age=30;
    })
  },
  computed: {
    //根据num计算出展示的评价的数组
    comments() {
      var buySelect = ["all", "good", "bad", "postForm"];

      if (this.detail.buyerReviews) {
        return this.detail.buyerReviews[buySelect[this.num]];
      } else {
        return [];
      }

      /*if(this.num===0){
        return this.detail.buyerReviews.all
      }
      if(this.num===1){
        return this.detail.buyerReviews.good
      }
      if(this.num===2){
        return this.detail.buyerReviews.bad
      }
      if(this.num===3){
        return this.detail.buyerReviews.postForm
      }*/
    }
  },
  methods:{
    addName(){
      // this.json.name="妲己"
      // console.log(this.json)

      // this.$set(this.json,"name","妲己")
      Vue.set(this.json,"name","妲己")
    },
    x30(){
      this.json.x=30
    },
    change50(){
      // this.testArr[0].age=50
      // console.log(this.testArr)
      var json=this.testArr[0]
      json.age=50;
      // this.testArr.splice(0,1,json);
      Vue.set(this.testArr,0,json)

    }
  }
};
</script>
<style  scoped>
.banner {
  height: 3rem;
  background: pink;
}
button {
  background: orange;
}
.nav {
  margin-top: 0.3rem;
  width: 100vw;
  display: flex;
  height: 0.6rem;
  background: #cccccc;
}
.nav-item {
  flex: 1;
  font-size: 0.3rem;
  line-height: 0.6rem;
}
.nav-item-select {
  background: pink;
  color: #fff;
}
.comment-nav {
  overflow: hidden;
}
.comment-nav-item {
  float: left;
  width: 1rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.24rem;
  background: #333333;
  color: #fff;
  margin: 0.3rem;
}
.comment-nav-item-select {
  background: blue;
}
</style>