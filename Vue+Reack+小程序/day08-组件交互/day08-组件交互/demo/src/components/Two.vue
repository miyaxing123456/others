<template>
    <div class="box">
        <h1>this is Two </h1>
        <p>时间：{{date.getSeconds()}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            date:new Date(),
            time:null,
        }
    },
    mounted(){
        this.time=setInterval(()=>{
            this.date=new Date()
            
        },1000)
    },
    beforeDestroy() {
        clearInterval(this.time)
        console.log("two beforeDestroy")
    },
}
</script>
<style lang="css">
    
</style>