// pages/component1/component1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgs:[
        "/imgs/0.jpg",
        "/imgs/1.jpg",
        "/imgs/2.jpg",
      ],
      activeindex:0,  // 默认显示第一个
      menu:['首页','推荐','直播','考研','IT培训','军事','新闻','家政','短视频','公务员']
  },

  swiperchange(e){
    // 组件的特殊属性/私有的事件，获取值的时候，是在detail里面获取
    // console.log(e.detail.current)
    let  activeindex = e.detail.current;
    this.setData({
      activeindex
    })

  }
})