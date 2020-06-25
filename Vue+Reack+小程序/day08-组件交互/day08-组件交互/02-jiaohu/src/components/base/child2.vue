<template>
  <div class="box">
    <h1>this is child2</h1>
    <p>info:{{info}}</p>
    <input type="text" v-model="info" />

    <hr />
    <h3>obj.msg:{{obj.msg}}</h3>
    <input type="text" v-model="obj.msg" />
  </div>
</template>
<script>
//对于一个组件，可以使用data computed props的数据，但是只能修改data computed的数据，不能修改props传递的数据。
//父组件传递过来的数据， 父变--》子变；子组件直接修改传递过来的数据，会报错！
//如果想要父变--》子变，子变-》父变，那么传递数据的时候传递一个json格式的数据。
export default {
  props: ["info", "obj"],
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="css">
</style>