//db.js 是用来连接数据库mongondb
const mongoose=require("mongoose");

//这里是连接数据库的地址
//mongodb代表是mongodb的连接方式
//localhost：27017 服务器+端口号
//web106是数据库的名字：当没有这个web106库的时候，
//会创建一个新的
let url="mongodb://localhost:27017/web106_shm";

mongoose.connect(url);
mongoose.connection.on("connected",()=>{
    console.log("连接数据web106成功")
})
mongoose.connection.on("error",()=>{
    console.log("数据库连接失败");
})
module.exports=mongoose;



