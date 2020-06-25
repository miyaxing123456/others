<template>
  <div>
    <h1>推荐页面</h1>
    <to-search></to-search>
    <div class="con">
      <!-- <div class="item">
        <img src="https://p1.music.126.net/ULSOyhe6xC5Xo8xRiPoa0A==/109951164840047422.jpg" alt />
        <p>日月盈昃,容不下我对你的款款深情</p>
      </div>-->

      <!-- 3.遍历数据 -->
      <div class="item" v-for="item in arr" :key="item.id" @click="toList(item.id)">
        <img :src="item.picUrl" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { requestTuijian } from "../util/request";
export default {
  props: [],
  components: {},
  data() {
    return {
      //2.初始化数据
      arr: []
    };
  },
  mounted() {
    //1.一进来就要获取推荐的歌曲的榜单
    requestTuijian().then(res => {
      this.arr = res.data.result;
    });
  },
  methods: {
      // 4.跳转至list
    toList(id) {
      this.$router.push("/list?id="+id);
    }
  }
};
</script>
<style lang="css" scoped>
.con {
  overflow: hidden;
}
.item {
  width: 50%;
  float: left;
  height: 2.5rem;
  padding: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
}
.item img {
  width: 100%;
  height: 1.5rem;
}
.item p {
  line-height: 0.6rem;
}
</style>