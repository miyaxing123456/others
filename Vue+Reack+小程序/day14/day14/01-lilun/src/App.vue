<template>
  <div>
    <v-a></v-a>
    <v-b></v-b>
    <v-c></v-c>
  </div>
</template>
<script>
import vA from "./components/vA"
import vB from "./components/vB"
import vC from "./components/vC"
export default {
  components: {
    vA,
    vC,
    vB
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.box{
  width: 90%;
  margin: 20px auto;
  border: 1px solid orange;
}
</style>