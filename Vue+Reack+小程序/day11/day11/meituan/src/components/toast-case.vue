<template>
  <div class="toast">{{info}}</div>
</template>
<script>
export default {
  props: ["info"],

  mounted() {
    this.time = setTimeout(() => {
      //要toast-case消失，把order的showCase改为false
      this.$emit("hide");
    }, 2000);
  },
  beforeDestroy() {
    clearTimeout(this.time);
  }
};
</script>
<style lang="css" scoped>
.toast {
  font-size: 0.3rem;
  line-height: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0rem 0.3rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.3rem;
}
</style>