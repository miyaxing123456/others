// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  login(e){
    // 执行登录
    console.log(e)
    if(e.detail.errMsg == "getUserInfo:fail auth deny"){
      console.log(123)
      // 取消授权
      return  false;
    }
    // 允许授权登陆
    wx.navigateBack({
      delta:1
    })

  }
  
})