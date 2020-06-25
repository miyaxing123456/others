<template>
  <div class="header">
      <v-news></v-news>
      <v-news></v-news>
  </div>
</template>
<script>
import vNews from "./news"
export default {
    components:{
        vNews
    }
};
</script>
<style lang="css">
.header {
  height: 100px;
  background: pink;
}
</style>