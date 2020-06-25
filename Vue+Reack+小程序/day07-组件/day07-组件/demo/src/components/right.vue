<template>
    <div class="right">
        <v-news></v-news>
        <v-search></v-search>
    </div>
</template>
<script>
import vNews from "./news"
export default {
    components:{
        vNews
    }
}
</script>
<style lang="css">
    .right{
        flex: 1;
    }
</style>