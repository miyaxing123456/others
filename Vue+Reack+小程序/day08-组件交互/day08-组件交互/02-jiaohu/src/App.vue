<template>
  <div>
    <!-- 父传子 理论 -->
    <v-parent></v-parent>

    <!-- 父传子 案例 -->
    <!-- <v-case></v-case> -->

    <!-- 子传父 -->
    <!-- <v-case2></v-case2> -->
  </div>
</template>
<script>
import vParent from "./components/base/parent";
import vCase from "./components/case/case"
import vCase2 from "./components/case2/case"
export default {
  components: {
    vParent,
    vCase,
    vCase2
  }
};
</script>
<style lang="css">
.box {
  width: 90%;
  margin: 20px auto;
  border: 2px solid blue;
}
</style>