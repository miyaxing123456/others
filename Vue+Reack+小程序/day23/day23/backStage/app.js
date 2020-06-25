const express = require("express")
const bodyParser=require('body-parser');

const app = express()
//配置静态资源
app.use(express.static("./www"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//获取电影列表  get '/getMovie'
app.get("/getMovie", (req, res) => {
    res.send({
        isok: true,
        movies: [
            {
                id: "1",
                name: "我和我的祖国"
            },
            {
                id: "2",
                name: "大话西游"
            }
        ]
    })
})
//获取电影详情 get '/getDetail' 参数：id
app.get("/getDetail", (req, res) => {
    const query = req.query;
    if (query.id == '1') {
        res.send({
            isok: true,
            detail: {
                id: "1",
                name: "我和我的祖国",
                director: "徐峥",
                year: 2019
            }
        })
    }
    if (query.id == '2'){
        res.send({
            isok: true,
            detail: {
                id: "2",
                name: "大话西游",
                director: "刘镇伟",
                year: 1995
            }
        })
    }
    res.send({
        isok: false,
        info:"没有此数据",
        detail: null
    })
})
//登录 post '/login' 参数：name pass
app.post("/login",(req,res)=>{
    const body=req.body;
    if(body.name=="admin"&&body.pass=="123"){
        res.send({
            isok:true,
            info:"登录成功"
        })
    }else{
        res.send({
            isok:false,
            info:"账号或者密码错误"
        })
    }
})

console.log("你的项目启动在localhost:4000")
app.listen(4000)