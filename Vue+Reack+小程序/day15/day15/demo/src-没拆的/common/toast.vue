<template>
  <div class="toast">{{info}}</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["info"],
  methods: {
    ...mapActions(["changeInfoAction"])
  },
  mounted() {
    setTimeout(() => {
      //info变为null
      this.changeInfoAction(null);
    }, 2000);
  }
};
</script>
<style  scoped>
.toast {
  font-size: 0.3rem;
  line-height: 0.6rem;
  padding: 0 0.3rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 0.3rem;
}
</style>