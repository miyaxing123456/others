<template>
  <div>
    <h1>详情页</h1>

    <button v-if="isCollect" @click="cancelAction(detail.id)">取消收藏</button>
    <button v-else @click="collectAction(detail)">收藏</button>
    
    <h2>题目：{{detail.title}}</h2>
    <p>内容:{{detail.con}}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["detail", "isCollect"])
  },

  methods: {
    ...mapActions(["requestDetailAction", "collectAction", "cancelAction"])
  },
  mounted() {
    var id = this.$route.query.id;
    this.requestDetailAction(id);
  }
};
</script>
<style scoped>
</style>