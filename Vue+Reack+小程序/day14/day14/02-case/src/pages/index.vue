<template>
  <div>
    <h1>首页</h1>
    <router-link to="/collection">收藏页</router-link>
    <hr>


    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="'/detail?id='+item.id">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  
  methods: {
    ...mapActions([
      "requestListAction"
    ])
  },
  mounted() {
    this.requestListAction()
  },
  computed: {
    ...mapGetters([
      "list"
    ])
  }
};
</script>
<style  scoped>
</style>