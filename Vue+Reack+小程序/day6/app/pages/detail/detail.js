// pages/detail/detail.js
const  api = require('../../utils/api.js')
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
      let  {id,title} = options;
      wx.setNavigationBarTitle({
        title,
      })
      // 调用获取故事详情的方法
      this.getDetail(id)
  },

  // 获取详情
  async   getDetail(id){
      const   detail =  await  api._getDetail({id})
      // console.log(detail.data.showapi_res_body.content)
      this.setData({
        content:detail.data.showapi_res_body.content
      })

      // 判断一下是否登录，如果登录，直接进行缓存操作
      let  _this = this;
      wx.getSetting({
        success (res) {
          if(res.authSetting['scope.userInfo']){
              //登录授权了
              var story = {};
              story.title = detail.data.showapi_res_body.title;
              story.id = detail.data.showapi_res_body.id;
            // 存入缓存
              // 查看当前缓存中是否有当前故事，如果有，不进行缓存操作，，没有执行填加
              let  storys = wx.getStorageSync('storys') || [];
              // 如果能够查到有值， 正常的索引位置，如果没有 ，返回的是-1
              let  findIndex = storys.findIndex((item,index)=>{
                  return  item.id == id;
              })
              if(findIndex ==  -1){
                // 执行添加即可
                storys.push(story)
              }
              // console.log(findIndex)
              wx.setStorageSync('storys', storys)

          }
        }
      })
  }

})