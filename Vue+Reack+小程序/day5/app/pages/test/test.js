// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      photo:"/icon/myFull.png",
      arr:[
        {
          id:"10",
          name:"小米"
        },
        {
          id:"11",
          name:"华为"
        },
        {
          id:12,
          name:"苹果"
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 1.获取系统信息
      // 同步
      // var system = wx.getSystemInfoSync();
      // console.log(system)
      // 异步获取
      // wx.getSystemInfo({
      //   complete: (res) => {
      //     console.log(res)
      //   },
      // })

      // 2.交互
      // 显示消息提示框
      // wx.showToast({
      //   title: '数据加载中',
      //   icon:"loading",
      //   duration:5000,
      //   image:"../../icon/myFull.png",  //图片
      //   complete:(res)=>{
      //     console.log(res)
      //   }
      // })

      // 网络请求，下载，或上传
      // 隐藏消息提示框
      // wx.hideToast({
      //   complete: (res) => {},
      // })
      //
      // wx.showLoading({
      //   title: '数据加载中',
      // })

      // 当请求成功之后，隐藏
      // setTimeout(()=>{
      //   wx.hideLoading({
      //     complete: (res) => {},
      //   })
      // },3000)

    
      
      // 显示tabbar上面的红点
      wx.showTabBarRedDot({
        index: 0,
      })

    // 隐藏tabbar
    wx.hideTabBar({
      animation: true,
    })
      
  },

  del(e){
    let id = e.target.dataset.id;
    // 提示用户是否删除
    wx.showModal({
       title:"删除提示",
       content:`您是否要删除id为${id}的商品？`,
       cancelText:"back",
       cancelColor:"red",
       success:(res)=>{
          console.log(res)
          // 取消：  cancel（取消）  true    confirm（确定）  false
          if(res.confirm){
              //确定删除了
              console.log('删除')
          }else{
            //不删除
              console.log('不删除')
          }
       }
    })
  },

  fn(type){
    let _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        // console.log(res)
        _this.setData({
          photo:res.tempFilePaths[0]
        })
      }
    })
  },

  changePhoto(){
    let _this = this;
    // 选择照片  【手机相册，拍照】
     wx.showActionSheet({
        itemList: ['手机相册', '拍照'],
        success (res) {
          // console.log(res.tapIndex)
          if(res.tapIndex ==  1){
            _this.fn('camera')
          }else if(res.tapIndex ==  0){
            _this.fn('album')
          }
          
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
  },

  togoodslist(e){
      let  {id,name} =  e.currentTarget.dataset;

      // wx.navigateTo({
      //   url: `/pages/list/list?id=${id}&name=${name}`,
      // })
      wx.redirectTo({
        url: `/pages/list/list?id=${id}&name=${name}`,
      })
  }

  
})