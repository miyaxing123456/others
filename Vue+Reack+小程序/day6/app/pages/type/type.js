// pages/type/type.js
// 导入所有的接口
const  api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      types:[]
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 判断--  如果types在缓存中存在，那么就使用缓存的数据，否则在发起网络请求
    let  types = wx.getStorageSync('types') || []; //要么有，要么是空数组
    if(types.length){
        //证明有缓存数据，
       this.setData({
         types,
       })
    }else{
      // 缓存是空的，
      this.getTypes()
    }
  
  },

  // 获取当前的故事分类
  async getTypes(){
    // 网络请求  wx.request()
    // 1.异步处理
    // api._getTypes().then(res=>{
    //   console.log(res)
    // })
    //2. 同步处理
    const  types = await api._getTypes()
    // 获取到数据，存入缓存
    // console.log(types.data.showapi_res_body.storylist)
    wx.setStorageSync('types', types.data.showapi_res_body.storylist)
    this.setData({
      types:types.data.showapi_res_body.storylist
    })
  },
  // 跳转到故事列表中
  tolist(e){
     let  {id,title} = e.currentTarget.dataset;
    //  跳转到故事列表页面
     wx.navigateTo({
       url: `/pages/list/list?id=${id}&title=${title}`,
     })
  }

 
})