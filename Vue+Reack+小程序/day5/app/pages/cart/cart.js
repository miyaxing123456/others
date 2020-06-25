// pages/cart/cart.js
// 引入当前的请求API
import urlApi from "../../utils/urlapi.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onShow: function () {
      wx.getUserInfo({
        complete: (res) => {
          console.log(res)
        },
      })
  },

  async getData() {
    // 网络请求
    //  wx.request({
    //    url: 'http://www.zhaoyunuo.net/data.json',
    //    data:{},
    //    header:{
    //      "content-type":"application/json"
    //    },
    //    method:"get",
    //    success:(res)=>{
    //       console.log(res)
    //    },
    //    fail:(err)=>{
    //       console.log(err)
    //    }
    //  })
    // 异步的操作
    // urlApi('https://www.zhaoyunuo.net/data.json').then((res)=>{
    //   console.log(res)
    //   // 逻辑代码
    // })

    // 同步的操作
    var info = await urlApi('https://www.zhaoyunuo.net/data.json')

    console.log(info)
  },

  setstroage() {
    // 异步存储
    // wx.setStorage({
    //   data: "web01",  // 要存储的值
    //   key: 'classid', // key剑
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
    // 当前key 如果重复，那么值会被覆盖掉
    // 同步存储没有返回值
    let cart = [{
        id: "101",
        name: "苹果1"
      },
      {
        id: "102",
        name: "苹果2"
      },
      {
        id: "103",
        name: "苹果3"
      }
    ]
    var res = wx.setStorageSync('cart', cart)
    console.log(res, '同步')

  },
  getstroage() {
    // 异步获取
    // wx.getStorage({
    //   key: 'classid',
    //   success(res){
    //     console.log(res)
    //   }
    // })

    // 同步  try  catch
    try {
      var info = wx.getStorageSync('carts')
      // console.log(info)
      info.map((item, index) => {
        console.log(item)
      })
    } catch (err) {
      // 代码走到这里，加逻辑处理
      console.log(err.message)
    }


  },
  removestroage() {

    wx.removeStorage({
      key: 'cart',
      success(res) {
        console.log(res)
      }
    })
  },

  // 获取用户信息
  getuserinfo() {
    // errMsg: "getUserInfo:fail scope unauthorized"
    // 先去检测一下是否授权了（用户有没有同意）
    wx.getSetting({
      success(res) {
        // res.authSetting 值是空的，或者说没有scope.userInfo
        // 证明当前用户不允许获取用户信息
        console.log(res.authSetting)
        if (res.authSetting['scope.userInfo']) {
          //已经授权了
          // console.log('已经授权了')
          wx.getUserInfo({
            complete: (res) => {
              console.log(res,'接口')
            },
          })
        } else {
          // 没有授权
          wx.showToast({
            title: '请先去授权',
            icon: "none"
          })

          // 可以进行授权了
          // 当前授权中，只有获取用户信息，不会弹窗，也就是不能进行授权
          // wx.authorize({
          //   scope: 'scope.userInfo',
          // })

        }
      }
    })

  },
  login(e) {
    // console.log(e)
    // 获取到用户信息，将用户信息保存到缓存中
    
  }

})