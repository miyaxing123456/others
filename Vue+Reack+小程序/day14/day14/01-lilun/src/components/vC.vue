<template>
  <div class="box">
    <h1>this is c</h1>
    <p>name:{{$store.state.name}}</p>
    <p>age:{{$store.state.age}}</p>

    <hr />
    <h1>getters</h1>
    <p>name:{{$store.getters.getName}}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>