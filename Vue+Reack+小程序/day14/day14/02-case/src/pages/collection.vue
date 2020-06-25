<template>
  <div>
    <h1>收藏页</h1>
    <ul>
      <li v-for="item in collections" :key="item.id">
         <router-link :to="'/detail?id='+item.id">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["collections"])
  }
};
</script>
<style  scoped>
</style>