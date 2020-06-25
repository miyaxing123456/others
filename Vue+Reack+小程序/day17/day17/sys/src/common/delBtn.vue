<template>
  <el-button type="primary" class="btn-primary" @click="del()">删除</el-button>
</template>
<script>
export default {
  props: ["id"],
  methods: {
    del() {
      this.$confirm("你确定要删除吗?", "删除提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        confirmButtonClass: "btn-primary",
        type: "warning"
      }).then(() => {
        // 不确定要干啥
        this.$emit("del", this.id);
      }).catch(()=>{
        
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

</style>