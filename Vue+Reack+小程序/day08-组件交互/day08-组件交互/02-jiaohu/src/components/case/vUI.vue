<template>
  <div class="box">
    <h4>ui讲师</h4>
    <v-card v-for="item in arr" :key="item.id" :d="item"></v-card>
  </div>
</template>
<script>
import vCard from "./vCard";
export default {
  components: {
    vCard
  },
  data() {
    return {
      arr: [
        {
          id: "11",
          name: "李老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109014053660.jpg"
        },
        {
          id: "22",
          name: "吴老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0306/20190306094239591.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="css">
</style>