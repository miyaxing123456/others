// 将用户信息插入数据库  db  
const db = wx.cloud.database(); // 获取数据库引用
const cloudfun = require('../../utils/cloudfun.js')
Page({
  data: {
    users: []
  },
  // 执行注册操作
  // reg(e) {
  //   let {
  //     username,
  //     password
  //   } = e.detail.value;

  //   // 执行添加
  //   // db.collection('user').add({
  //   //   // 插入的数据
  //   //   data:{
  //   //     username,password
  //   //   },
  //   //   success(res){
  //   //     // console.log(res)
  //   //     if(res.errMsg == "collection.add:ok"){
  //   //       wx.showToast({
  //   //         title: '注册成功',
  //   //       })
  //   //     }
  //   //   }
  //   // })
  //   db.collection('user').add({
  //     data: {
  //       username,
  //       password
  //     }
  //   }).then(res => {
  //     if (res.errMsg == "collection.add:ok") {
  //       wx.showToast({
  //         title: '注册成功',
  //       })
  //     }
  //   })


  // },
  onShow() {
    this.find();
  },
  find() {
    // 查询所有
    let _this = this;
    // eq  lt gt    指令对象
    const _ = db.command;
    db.collection('user').where({
      // password:"123456"
      // age:_.gt(17)
    }).get({
      success(res) {
        // console.log(res)
        _this.setData({
          users: res.data
        })
      }
    })
  },
  update(e) {
    let id = e.target.dataset.id; // 获取条件id
    // // doc里面存储的就是当前的id，获取到的是是一个对象
    // db.collection('user').doc(id).get().then(res=>{
    //   console.log(res)
    // })
    wx.navigateTo({
      url: '/pages/update/update?id=' + id,
    })
  },
  // 根据条件进行修改多条数据
  updateWhere() {
    // 修改多条数据，不能再小程序端进行操作，必须在云端进行操作
    // db.collection('user').where({
    //   password:"123456"
    // }).update({
    //   data:{
    //     age:40
    //   },
    //   success(res){
    //     console.log(res)
    //   }
    // })
    // 在小程序端如何调用云端云函数
    // wx.cloud.callFunction({
    //   name:"total", //要调用的云函数的名称
    //   data:{
    //     a:2,
    //     b:3
    //   }, //传递给云函数的参数
    //   success(res){
    //     console.log(res)
    //   }
    // })
    let _this = this;
    wx.cloud.callFunction({
      name: "updateWhere",
      data: {
        table: "user",
        where: {
          password: "123456"
        },
        info: {
          username: "admin"
        }
      },
      success(res) {
        // console.log(res);
        if (res.result.errMsg == "collection.update:ok") {
          _this.find()
        }
      }
    })

  },
  // 删除一条数据
  del(e) {
    let id = e.target.dataset.id;
    let _this = this;
    db.collection('user').doc(id).remove({
      success: (res) => {
        // console.log(res)
        if (res.errMsg == "document.remove:ok") {
          _this.find()
        }
      }
    })

  },
  // 根据条件删除的方法
  async delWhere() {
    let data = {
      table: "user",
      where: {
        password: "123456"
      }
    }
    const delResult = await cloudfun("delWhere", data)

    // console.log(delResult,'1234567890')
    if(delResult.result.errMsg == "collection.remove:ok"){
        this.find()
    }
  },

  // 选择头像
  photo(){
    // 选择头像
    let  _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        // console.log(tempFilePaths)
        _this.setData({
          pic:tempFilePaths[0]
        })
      }
    })
  },

  reg(e) {
    let {
      username,
      password
    } = e.detail.value;
    let pic = this.data.pic; //图片的临时存储地址
    // 执行上传操作
    wx.cloud.uploadFile({
      cloudPath: Math.random()*100000+'zwd.png', // 上传至云端的路径
      filePath: pic, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log(res.fileID)
        db.collection('user').add({
          data:{
            username,
            password,
            pic:res.fileID
          },
          success(result){
              console.log(result)
          }
        })
      },
      fail: console.error
    })
    
  },

})