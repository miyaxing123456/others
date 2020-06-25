<template>
  <div class="box">
    <h1>this is a</h1>
    <!-- 5.使用 -->
    <p>name:{{$store.state.name}}</p>
    <button @click="$store.dispatch('changeWang')">王昭君</button>
    <button @click="$store.dispatch('changeName','大乔')">大乔</button>
    <button @click="$store.dispatch('changeName','小乔')">小乔</button>
    <p>age:{{$store.state.age}}</p>
    <button @click="$store.dispatch('changeAge1')">40</button>
    <p>num:{{$store.state.num}}</p>

    <hr />
    <h1>getters</h1>
    <p>name:{{$store.getters.getName}}</p>
    <p>age:{{$store.getters.getAge}}</p>

    <div class="box">
      <h1>mapGetters mapActions</h1>
      <h4>name:{{getName}}</h4>
      <h4>age:{{getAge}}</h4>
      <h4>num:{{getNum}}</h4>
      <button @click="changeName('伽罗')">伽罗</button>
      <button @click="changeAge()">40</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      "changeName":"changeName",
      "changeAge":"changeAge1"
    }),
   
  },
  mounted() {
    console.log(this.$store);
  },
  computed:{
    ...mapGetters([
      "getName",
      "getAge",
      "getNum"
    ]),
    a(){
      return 10;
    }
  }
};
</script>
<style scoped>
</style>