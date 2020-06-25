<template>
  <div>
    <!-- 节点嵌套组件 -->
    <!-- is: 1.解决标签的固定搭配问题；2.实现动态组件  -->
    <v-one></v-one>
    <!-- ul-li ol-li dl-dt dd table-tbody-tr-td  -->
    <ul>
      <li is="v-one"></li>
    </ul>
    <table>
      <tr is="v-one"></tr>
    </table>

    <div >
      <button @click="comName='v-one'">one</button>
      <button @click="comName='v-two'">two</button>

      <!-- 动态组件 动画 -->
      <!-- 在two组件，挂载完成的时候，开启了计时器，在two组件销毁之前，清除计时器 -->
      <!-- two组件消失的时候，就会触发销毁期 -->
      <transition
        enter-active-class="animate__animated animate__backInLeft"
      >
        <div :is="comName"></div>
      </transition>
    </div>

    <!-- 组件嵌套节点 -->
    <v-three>
      <ul>
        <li>锦瑟无端五十弦</li>
        <li>一弦一柱思华年</li>
      </ul>
    </v-three>
    <v-three></v-three>
    <v-three>
      <p>哈哈哈</p>
      <p>嘿嘿嘿</p>
      <p>嘻嘻嘻</p>
    </v-three>

    <v-four>
      <ul slot="shang">
        <li>王中王 ，火腿肠</li>
        <li>果冻，我要喜之郎</li>
      </ul>
      <ol slot="xia">
        <li>日照香炉生紫烟，遥看瀑布挂前川</li>
      </ol>
    </v-four>
    <v-four></v-four>


  </div>
</template>
<script>
//引入
import vOne from "./components/One";
import vTwo from "./components/Two";
import vThree from "./components/Three"
import vFour from "./components/Four"
export default {
  //注册
  components: {
    vOne,
    vTwo,
    vThree,
    vFour
  },
  data() {
    return {
      comName: "v-one"
    };
  }
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.box {
  width: 80%;
  margin: 20px auto;
  border: 2px solid orange;
}
</style>