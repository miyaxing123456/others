// pages/index.js
let banners = [
    "/static/0.jpg",
    "/static/1.jpg",
    "/static/2.jpg",
    "/static/3.jpg",
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
      banners, //所有的轮播图
      second:banners.length,  //轮播的时间
  },
  // 轮播图变化
  swiperChange(e){
      // console.log(e)
    // 1.获取second
      var second =  this.data.second
    // 2，做--操作
      second--;
      if(second <=0){
        // 跳转到故事分类页面 （故事分类是tab页面）
        wx.switchTab({
          url: '/pages/type/type',
        })

        return false;
      }
    // 3.second从新赋值
      this.setData({
          second,
      })

  },
  // 直接跳转到故事分类页面
  jump(){
    wx.switchTab({
      url: '/pages/type/type',
    })
  }

  
})