Page({
  data:{
    box:"box",
    width:200,
    height:200
  },
  change(){
    //  console.log(1)
    // this.setData({
    //   box:'changeBox'
    // })
    setInterval(()=>{
      this.setData({
        width:Math.random()*300,
        height:Math.random()*300
      })
    },100)
  }
})