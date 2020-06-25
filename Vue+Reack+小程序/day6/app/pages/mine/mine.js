// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      onOff:false,
      userInfo:{},
      slideButtons:[
        {
          type: 'warn',
          text: '查看',
        }
      ],
      lists:[] //故事列表
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let  _this = this;
      // 进入页面，判断当前小程序是否授权登陆
      //  1.获取手机号   2.获取用户信息  3.手机号验证码   4.表单操作
      wx.getSetting({
        success (res) {
          if(res.authSetting['scope.userInfo']){
            // 已经授权了
            // 1.获取用户信息
            wx.getUserInfo({
              success: function(res) {
                var userInfo = res.userInfo; // 对象
                // var nickName = userInfo.nickName
                // var avatarUrl = userInfo.avatarUrl
                // 获取故事列表
                var  lists = wx.getStorageSync('storys') || [];
                // 2.设置data
                _this.setData({
                  userInfo,
                  onOff:true, // 登录之后，打开开关
                  lists,
                })           
              }
            })
          }else{
            // 没有授权
            _this.setData({
              onOff:false
            })
          }
          
        }
      })
  },

  toLogin(){
    // 跳转到登录页面
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  
  // 跳转到故事详细页
  todetail(e){
    // 获取参数
    let  {id,title} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&title=${title}`,
    })
}

})