// pages/cq/cq.js
let allImage = [
  "/imgs/jiandao.png",
  "/imgs/shitou.png",
  "/imgs/bu.png",
]

let  timer = null; //设置定时器
let  onOff = true; // 判断自己是否出拳
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pcImage: "/imgs/jiandao.png",
    myImage:"/imgs/wenhao.png",
    allImage,
    result:"看结果",
    number:0
  },

  onLoad: function (options) {

    this.pcChuquan()
  },

  // 电脑出拳
  pcChuquan() {
    // 周期性定时器
    timer =  setInterval(() => {
      // 获取0-2的随机数
      let pcindex = Math.floor(Math.random()*3)
      // console.log(pcindex)
      this.setData({
        pcImage: allImage[pcindex],
        pcindex,
      })
    }, 100)

  },
  // 自己出拳
  myChuquan(e){
      if(!onOff)  return false;
    // 清除定时器，电脑停止出拳
      clearInterval(timer)

      let  myindex = e.currentTarget.dataset.myindex;
      
      // 出拳之后，把开关关上
      onOff = false;

      // 进行比较 我和电脑的输赢
      //   平局   输  赢
      // 1.获取电脑出拳的索引
      let  pcindex  =this.data.pcindex;
      let  str = "";
      if(myindex ==  pcindex){
        // 平局
         str = "平局了"
      }else if((myindex ==  0 && pcindex == 2) || (myindex ==  1 && pcindex ==  0) || (myindex ==2 &&  pcindex ==  1)){
          // 赢
          str = "您赢了"

          // 进行赢得次数的累加
          this.data.number++;  // 此时number已经发生变化
      }else{
         str = "您输了"
      }

      // console.log(str)
      // console.log(myindex)
      this.setData({
        myImage:allImage[myindex],
        result:str,
        number:this.data.number
      })

  },
  // 再来一次
  align(){
      // 相当于小的初始话
      this.pcChuquan()
      onOff = true;
      this.setData({
        myImage:"/imgs/wenhao.png",
        result:"看结果"
      })

  }

})