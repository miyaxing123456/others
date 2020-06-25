<template>
  <div class="box">
    <h4>java讲师</h4>
    <v-card v-for="item in teachers" :key="item.id" :d="item"></v-card>
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
      teachers: [
        {
          id: "1",
          name: "赵老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109110959719.jpg"
        },
        {
          id: "2",
          name: "李老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109105342884.jpg"
        },
        {
          id: "3",
          name: "张老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109110959719.jpg"
        },
        {
          id: "4",
          name: "王老师",
          img:
            "http://www.ujiuye.com/uploadfile/2019/0109/20190109110959719.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="css">
</style>