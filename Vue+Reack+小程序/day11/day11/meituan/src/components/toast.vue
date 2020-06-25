<template>
  <div>弹框</div>
</template>
<script>
export default {
  mounted(){
      console.log("弹框挂载完成")
  },
  beforeDestroy() {
      console.log("弹框即将卸载")
  },
};
</script>
<style lang="css" scoped>
</style>