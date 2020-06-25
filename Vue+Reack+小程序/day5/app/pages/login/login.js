// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo: "../../icon/myFull.png",
    onOff: false, // true  登录  false  未登录
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    // 进入页面，检测是否登录
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 1.使用api再一次获取用户信息
          wx.getUserInfo({
            complete: (res) => {
              // console.log(res,'接口')
              // _this.setData({
              //   onOff: true, // 证明已经登录了
              //   userInfo,
              // })
            },
          })
          // 2.获取缓存中的用户信息
          // let userInfo = wx.getStorageSync('userInfo') || {}
          // _this.setData({
          //   onOff:true, // 证明已经登录了
          //   userInfo,
          // })

        } else {
          // 没有授权
          wx.showToast({
            title: '请先去授权',
            icon: "none"
          })

        }
      }
    })
  },

  getuserinfo(e) {
    // console.log(e)
    if (e.detail.errMsg == "getUserInfo:fail auth deny") {
      wx.showToast({
        title: '要记得登录',
        icon: "none"
      })

      return false;
    }

    // 获取用户信息，进行保存处理
    let userInfo = e.detail.userInfo;
    // 1.存入缓存
    wx.setStorageSync('userInfo', userInfo);
    // 2.设置到data中,更改开关
    this.setData({
      userInfo,
      onOff: true
    })



  },
  login(){
    wx.login({
      complete: (res) => {
        console.log(res)
        var  code = res.code;

        // 不建议在前端（小程序端获取 登录状态）
        // wx.request({
        //   url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx8fc369471215e8ae&secret=fbd97faa4573a619dba5cec1c1e20763&js_code=${code}&grant_type=authorization_code`,
        //   success(res){
        //     console.log(res)
        //   }
        // })
        // 发起网络请求，将code传递到后端服务 （php  python java）
        // 后端php接受到code，再去获取appid  秘钥，发起请求
        // https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
        // wx.request({
        //   url: 'http://localhost:3000/login.php',
        //   data:{
        //     code,
        //   },
        //   success(res){
        //       // res  获取到的是加密之后，session_key ,将加密的之后的串保存到缓存中，
        //   }
        // })
      },
    })
  }
})