// 项目的配置文件
// 1.express 
// 1-1. 引入express模块
const   express =  require('express');  
// 1-2. 获取app对象
const  app   =  express()   //  new  express()
// 1-3. 设置当前服务的端口号
const  port = 3000;

// 4.引入数据库模块
const   MC  = require('mongodb').MongoClient;  //用来链接数据库
const   DBurl = "mongodb://localhost:27017/web" // 设置链接数据库的地址

// 5.引入加载post请求及文件上传模块
var  multiparty  = require('multiparty');

// 2.设置模板引擎
app.set('view engine','ejs') // 给当前视图设置ejs为模板引擎  默认的模板目录是views

// 3.设置全局中间件
app.use('/',express.static('public'))
//  访问/upload 直接能够进入当前upload目录
app.use('/upload',express.static('upload'))

module.exports = {
    express,
    app,
    port,
    MC,
    DBurl,
    multiparty
}