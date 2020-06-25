// 封装云函数调用

const   cloudfun = (name,data)=>{
  return  new Promise((resolve,reject)=>{
    wx.cloud.callFunction({
      name, // 云函数的名称
      data, // 集合的名称  条件  
      success:resolve,
      fail:reject
    })
  })
}

module.exports  =  cloudfun;