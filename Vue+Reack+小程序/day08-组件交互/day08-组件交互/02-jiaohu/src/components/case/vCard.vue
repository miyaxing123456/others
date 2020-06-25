<template>
    <div class="card">
        <img :src="d.img" alt="">
        <p>{{d.name}}</p>
    </div>
</template>
<script>
export default {
    props:["d"]
}
</script>
<style lang="css">
    .card{
        width:150px;
        height: 200px;
        display: inline-block;
        background: orange;
        padding: 10px;
        margin: 20px;
    }
    .card img{
        width: 100%;
        height:130px;
    }
    .card p{
        text-align: center;
    }
</style>