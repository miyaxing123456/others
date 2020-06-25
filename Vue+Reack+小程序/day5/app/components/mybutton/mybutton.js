// components/mybutton/mybutton.js
Component({
  /**
   * 组件的属性列表
   *  组件设计着，给使用着留的属性设置，就在当前属性内
   */
  properties: {
      size:{
        type:String,
        value:"default",
        observer:function(newval,oldval){
          // 监听当前属性的变化
            console.log(newval,oldval)
        }
      },
      color:{
        type:String,
        value:"red"
      },
      title:{
        type:String
      }
  },

  /**
   * 组件的初始数据 -- 与页面的data功能一致
   */
  data: {
    // size:"default"
  },

  /**
   * 组件的方法列表--  放置自定义函数（参考vue）
   */
  methods: {
        // 获取data内的值，使用this，设置 this.setData({})
  }
})
