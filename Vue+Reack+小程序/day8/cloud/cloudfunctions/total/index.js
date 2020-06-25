// 云函数入口文件
// 引入sdk 模块
const cloud = require('wx-server-sdk')
// 云端云能力初始化 /  小程序端 云能力初始化  wx.cloud.init()
cloud.init({
  env:"develop-zwd14251"  //指定云端环境
})

// 云函数入口函数
exports.main = async (event, context) => {
  // event   小程序端传递过来的参数  openid  appid 

  // context  调用信息和运行状态
  //  a + b  俩个数之和
    return  {
        result:event.a + event.b,
        event,
    }
}