// pages/list/list.js
const api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:"", //类别id
      page:1, //默认的页码
      onOff:false, //  true  代表登录  false  未登录
      slideButtons:[
        {
          type: 'warn',
          text: '查看',
        }
      ],
      lists:[] //故事列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 获取参数
      let  {id,title}  =options;
      wx.setNavigationBarTitle({
        title,
      })
      this.data.id = id; //将id存储起来
      // 调用
      this.getLists(); 
      let  _this = this;
      // 进入页面，判断当前小程序是否授权登陆
      wx.getSetting({
        success (res) {
          if(res.authSetting['scope.userInfo']){
            // 已经授权了
            // 1.获取用户信息
            wx.getUserInfo({
              success: function(res) {
                var userInfo = res.userInfo; // 对象
                // 2.设置data
                _this.setData({
                  userInfo,
                  onOff:true, // 登录之后，打开开关
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

  // 获取数据
  async getLists(){
      // console.log(this.data.id)
      wx.showLoading({
        title: '数据加载中',
      })
      let data = {
        classifyId:this.data.id,
        page:this.data.page
      }
      const lists = await   api._postLists(data)
      if(lists.data.showapi_res_body.contentlist.length > 0){
         wx.hideLoading({})
      }
      // 将老的数据获取到，与心得数据进行拼接
      var newlists = this.data.lists.concat(lists.data.showapi_res_body.contentlist)
      this.setData({
        lists:newlists
      })
  },
  onReachBottom(){
    //下一页的操作
    this.data.page++; //让页数加1
    // 页码改变后，再一次获取故事信息
    this.getLists();

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