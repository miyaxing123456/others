<template>
  <div>
    <v-toast v-if="info" :info="info"></v-toast>

    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["info"])
  }
};
</script>
<style  scoped>
</style>