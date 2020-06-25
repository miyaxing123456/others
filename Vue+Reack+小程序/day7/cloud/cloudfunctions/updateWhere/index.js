// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"develop-zwd14251"
})

// 在云端再去初始化数据库，获取数据库引用
const db = cloud.database();  // 小程序端  wx.cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  //  event  table 集合     where   条件   data  要修改的数据
  // 修改多条数据
  return  db.collection(event.table).where(
      // 执行修改条件
    event.where
    // {
    //   password:"123456"
    // }
  ).update({
     //执行修改的数据
    data:event.info
  })

}