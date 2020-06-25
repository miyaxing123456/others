<template>
    <div class="box">
        <h1>this is child</h1>
        <p>info:{{info}}</p>
    </div>
</template>
<script>
//在template使用的数据，有data computed props
export default {
    props:["info"],
}
</script>
<style lang="css">
    
</style>