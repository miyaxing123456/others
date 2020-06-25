const express = require("express")
const bodyParser = require('body-parser');

const app = express()
//配置静态资源
app.use(express.static("./www"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/list", (req, res) => {
    res.send({
        isok: true,
        data: [
            {
                "id": "1",
                "title": "从3个方面出发，搭建一支能力全面的运营团队"
            },
            {
                "id": "2",
                "title": "林郑月娥：25日起所有非香港居民乘飞机抵港不准入境"
            },
            {
                "id": "3",
                "title": "从老乡鸡“200 块发布会”，看黏性创意的 6 个法则"
            },
            {
                "id": "4",
                "title": "在线就白拿，至尊套装多只要在线60分钟，从此再无战力压力"
            }
        ]
    })
})


//获取详情 get '/getDetail' 参数：id
app.get("/getDetail", (req, res) => {
    const query = req.query;
    if (query.id == '1') {
        res.send({
            isok: true,
            detail: {
                "id": "1",
                "title": "从3个方面出发，搭建一支能力全面的运营团队",
                "con": "一个能力全面的运营团队的重要性不言而喻，本文作者结合自身的工作实践，从3个方面对如何搭建运营团队进行了梳理分析，希望本文内容对你有所启发。"
            }
        })
    }
    if (query.id == '2') {
        res.send({
            isok: true,
            detail: {
                "id": "2",
                "title": "林郑月娥：25日起所有非香港居民乘飞机抵港不准入境",
                "con": "【海外网3月23日|战疫全时区】据香港“东网”报道，香港特区行政长官林郑月娥23日举行记者会，并宣布于25日凌晨开始，所有非香港居民乘飞机抵港不准入境，机场停止所有转机服务，暂定为期14天。"
            }
        })
    }
    if (query.id == '3') {
        res.send({
            isok: true,
            detail: {
                "id": "3",
                "title": "从老乡鸡“200 块发布会”，看黏性创意的 6 个法则",
                "con": "最近这段时间，相信不少营销人都或多或少关注过“老乡鸡”这个品牌以及它的“2020 战略发布会”。也有不少文章分析解读这个发布会背后有趣的点与可学习的套路，那么在本文中，笔者主要结合“黏性创意”观点，聊聊老乡鸡发布会以及我们可以借鉴学习的地方。"
            }
        })
    }
    if (query.id == '4') {
        res.send({
            isok: true,
            detail: {
                "id": "4",
                "title": "在线就白拿，至尊套装多只要在线60分钟，从此再无战力压力",
                "con": "据了解，微博官方现已调整了微博可见范围设置的功能逻辑——非公开的微博也可以被设置为公开可见或其他可见范围。变更过可见范围的微博，会显示'已编辑'标识，并且在编辑记录页面可以查看微博的可见范围变化情况。"
            }
        })
    }



    res.send({
        isok: false,
        info: "没有此数据",
        detail: null
    })
})

app.get("/indexData", (req, res) => {
    res.send({
        isok: true,
        data: [
            {
                "id":"1",
                "name":"英伦风外套",
                "img":"https://img.alicdn.com/imgextra/i1/1916526132/O1CN01wy8nji1vAVG7IYEkU_!!1916526132-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp",
                "price":288
            },
            {
                "id":"2",
                "name":"面膜",
                "img":"https://img.alicdn.com/imgextra/i3/2206709277207/O1CN01yOdAA0236r2FWjpJ5_!!2206709277207-0-daren.jpg_360x360xzq90.jpg_.webp",
                "price":188
            },
            {
                "id":"3",
                "name":"防脱发神奇",
                "img":"https://gdp.alicdn.com/imgextra/i4/748377488/O1CN01ITi9Fw25BYKgktiFS_!!748377488.jpg",
                "price":99
            }
        ]
    })
})

console.log("你的项目启动在localhost:4000")
app.listen(4000)