<template>
    <div class="main">
        <v-left></v-left>
        <v-right></v-right>
    </div>
</template>
<script>
import vLeft from "./left"
import vRight from "./right"
export default {
    components:{
        vLeft,
        vRight:vRight
    }
}
</script>
<style lang="css">
    .main{
        flex: 1;
        background: #cccccc;
        display: flex;
    }
</style>