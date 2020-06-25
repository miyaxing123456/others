// miniprogram/pages/update/update.js
// api   监听api

const  db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
      let id = options.id;
      this.data.id = id;
      let  _this = this;
       db.collection('user').doc(id).get().then(res=>{
        //  console.log(res)
        _this.setData({
          users:res.data
        })
       })
  },
  // 执行修改
  doupdate(e){
      // 1.获取要修改的信息
      let  {username,password} = e.detail.value;
      //2. 执行修改操作
      db.collection('user').doc(this.data.id).update({
        data:{
          username,password
        },
        success(res){
            // console.log(res)
            if(res.errMsg == "document.update:ok"){
                wx.showToast({
                  title: '修改成功',
                })
                setTimeout(()=>{
                    wx.navigateBack({
                      delta:1,
                      complete: (res) => {},
                    })
                },1500)
            }
        }
      })

  }
})