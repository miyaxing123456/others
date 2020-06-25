const express=require("express")
const app=express()
//配置静态资源
app.use(express.static("./www"))
console.log("你的项目启动在localhost:3000")
app.listen(3000)