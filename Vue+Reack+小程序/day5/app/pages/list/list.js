// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let {id,name} = options; // 获取参数
    // 动态设置导航标题
      wx.setNavigationBarTitle({
        title:name
      })
      // 在顶部window，设置loading样式
      wx.showNavigationBarLoading({
        complete: (res) => {},
      })

      setTimeout(()=>{
        wx.hideNavigationBarLoading({
          complete: (res) => {},
        })
      },3000)

      // 隐藏 返回首页的按钮（图标）
      wx.hideHomeButton({
        complete: (res) => {},
      })
  },

 
})