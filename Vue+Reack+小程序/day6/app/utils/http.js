// 用来封装请求方法的
/*
    param:
      options： 网络请求的所有的参数对象
      options:{
        url:"1700-1" 接口地址
        method：get/post 请求方法
        data:{} 请求参数
        header： 头部报文
      }
*/
const baseUrl = require('./config.js').baseUrl;
const  request = (options)=>{
    return  new Promise((resolve,reject)=>{
        wx.request({
          url: `${baseUrl}/`+options.url,
          method:options.method || "get",   // 传过来我就用传的，否则就用 get
          data:options.data || {},
          header:options.header || {
            "content-type":"application/json"
          },
          success:resolve,
          fail:reject
        })
    })
}

module.exports = request;