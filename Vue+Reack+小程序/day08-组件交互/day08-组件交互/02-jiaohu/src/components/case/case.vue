<template>
    <div>
        <h1>这是父传子的案例</h1>
        
        <!-- java讲师 -->
        <v-java></v-java>
        <!-- ui讲师 -->
        <v-ui></v-ui>
        <!-- python讲师 -->
        <v-python></v-python>
    </div>
</template>
<script>
import vJava from "./vJava"
import vUi from "./vUI"
import vPython from "./vPython"
export default {
    components:{
        vJava,
        vUi,
        vPython
    }
}
</script>
<style lang="css">
    
</style>