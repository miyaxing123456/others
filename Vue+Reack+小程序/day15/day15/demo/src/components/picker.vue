<template>
  <!-- 2.展示数据 -->
  <div class="picker" @click.self="close" v-if="detail.reduct_price">
    <div class="con">
      <p>order:{{orderName}}</p>
      <p>address:{{address}}</p>
      <hr>
      <button @click="close">关闭</button>
      <img :src="detail.swiperImgArr[0]" alt />
      <p>单价：{{detail.reduct_price}}</p>
      <p>
        <button @click="sub">-</button>
        {{num}}
        <button @click="add">+</button>
      </p>
      <h3>商品规格</h3>
      <div class="sku-item" v-for="(item,index) in detail.buySelect" :key="item.name">
        <h4>{{item.name}}</h4>
        <p>
          <span
            v-for="(i,idx) in item.list"
            :key="i"
            :class="[idx===item.num?'select':'']"
            @click="skuCheck(index,idx)"
          >{{i}}</span>
        </p>
      </div>

      <div>总价：{{detail.reduct_price*num}}</div>
      <button @click="addShop">加入购物车</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default {
  // 1.接收父组件传递过来的detail
  props: ["detail"],
  components: {},
  data() {
    return {
      num: 1
    };
  },
  methods: {
    //关闭picker
    close() {
      this.$emit("close");
    },
    //3.数量自增
    add() {
      this.num++;
    },
    //4.数量自减
    sub() {
      this.num--;
      this.num = Math.max(1, this.num);
    },
    //点击了span
    skuCheck(index, idx) {
      // 为什么这个地方可以直接修改父组件的数据？因为传递的是json
      // this.detail.buySelect[index].num=idx; 是不ok
      // 为什么buySelect的item.num已经变了，但是页面没有渲染？

      var json = this.detail.buySelect[index];
      json.num = idx;
      //1.splice 2.vm.$set 3.Vue.set
      // this.$set(this.detail.buySelect,index,json)
      Vue.set(this.detail.buySelect, index, json);
      console.log(this.detail.buySelect);
    },
    ...mapActions({
      changeInfoAction: "changeInfoAction",
      addShopAction: "shop/addShopAction"
    }),
    //加入购物车
    addShop() {
      var arr = this.detail.buySelect.map(item => {
        return item.list[item.num];
      });
      this.addShopAction({
        img: this.detail.swiperImgArr[0],
        name: this.detail.name,
        price: this.detail.reduct_price,
        num: this.num,
        buySelect: arr,
        checked: false,
        pid: this.detail.pid
      });

      this.changeInfoAction("加入成功");
      this.$emit("close");
    }
  },
  computed:{
    ...mapGetters({
      "orderName":"order/name",
      "address":"address/name"
    })
  }
};
</script>
<style scoped>
.picker {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.con {
  padding: 30px;
  width: 100vw;
  box-sizing: border-box;
  max-height: 400px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
}
img {
  width: 1rem;
  height: 1rem;
}
p {
  font-size: 0.28rem;
  line-height: 0.5rem;
}
.sku-item {
  background: pink;
  margin: 0.2rem;
}
.sku-item p {
  overflow: hidden;
}
.sku-item p span {
  float: left;
  background: #fff;
  border-radius: 25px;
  margin: 0.1rem 0.1rem;
  padding: 0.2rem;
}
.sku-item p .select {
  background: blue;
  color: #fff;
}
button {
  background: orange;
}
</style>