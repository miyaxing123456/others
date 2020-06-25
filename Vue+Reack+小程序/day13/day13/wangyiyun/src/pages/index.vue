<template>
  <div>
    <router-view style="padding-bottom:1rem;"></router-view>
    <footer>
      <router-link to="/index/tuijian" active-class="select">
        <img :src="$route.path=='/index/tuijian'?imgs.homeHig:imgs.homeNor" alt />
        <div>推荐榜</div>
      </router-link>
      <router-link to="/index/top" active-class="select">
        <img :src="$route.path=='/index/top'?imgs.meHig:imgs.meNor" alt />
        <div>排行榜</div>
      </router-link>
    </footer>
  </div>
</template>
<script>
import homeHig from "../assets/img/tab_home_hig.png";
import homeNor from "../assets/img/tab_home_nor.png";
import meHig from "../assets/img/tab_me_hig.png";
import meNor from "../assets/img/tab_me_nor.png";
export default {
  props: [],
  components: {},
  data() {
    return {
      imgs: {
        homeHig,
        homeNor,
        meHig,
        meNor
      }
    };
  },
  mounted() {}
};
</script>
<style lang="css" scoped>
footer {
  width: 100vw;
  height: 1rem;
  position: fixed;
  left: 0rem;
  bottom: 0;
  background: #cccccc;
  display: flex;
}
footer a {
  flex: 1;
  text-align: center;
  line-height: 0.4rem;
  padding-top: 0.1rem;
}
.select div{
  color: orange;
}

</style>