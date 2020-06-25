// 提前编写好所有接口请求方法

// 导入http引入request
const request = require('./http.js');
const config = require('./config.js');

// 设置api接口

// 1.获取故事分类
const _getTypes = (data = {}) => {
  // 拼接请求参数
  var options = {
    url: "1700-1",
    method: "get",
    header: {
      "content-type": "application/json"
    },
    data: {
      showapi_appid: config.appid,
      showapi_sign: config.sign
    }
  }
  return request(options)
}

// 2.获取故事列表
const _postLists = (data = {}) => {
  //   es6属性，合并对象的
  Object.assign(data,{
      showapi_appid: config.appid,
      showapi_sign: config.sign
  })
  var options = {
    url: "1700-2",
    method: "post",  // post
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data 
  }
  return request(options)
}

// 3.获取故事详情接口
const _getDetail = (data = {}) => {
  //   es6属性，合并对象的
  Object.assign(data,{
      showapi_appid: config.appid,
      showapi_sign: config.sign
  })
  var options = {
    url: "1700-3",
    data 
  }
  return request(options)
}


module.exports = {
  _getTypes,
  _postLists,
  _getDetail
}