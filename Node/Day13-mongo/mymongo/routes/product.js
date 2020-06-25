const express = require("express");
const Model_Product = require("../mongoose/product.js")
const router = express.Router();
//打开添加产品的页面
router.get("/add", (req, res) => {
    //此处的访问是返回 添加商品的页面
    res.render("productadd", { message: "请填写商品信息" })
})
router.post("/add", (req, res) => {
    //post的数据是在哪里？
    console.log(req.body.pname);
    CreateProduct(req.body, (data) => {
        res.render("productadd", data);
    })
})


router.get("/list", (req, res) => {
    //mongodb的查询：
    //第一个参数 查询条件 {}，代表的是任意数据；
    //如果是查询 pprice=100；查询条件： {pprice:100}
    Model_Product.find({}, (err, result) => {
        if (err) {
            console.log("查询出错");
            res.render("plist", { message: "查询出错", data: [] })
        } else {
            console.log("获取数据成功");
            res.render("plist", { message: "加载所有数据", data: result })
        }
    })
})

router.get("/updatecount/:pid/:pcount",(req,res)=>{
    var pid=req.params.pid;
    var pcount=req.params.pcount;
    Model_Product.update({pid},{$set:{pcount}},(err,result)=>{
        if(err){
            console.log(err);
            res.json({
                code:1001,
                message:"修改失败"
            })
        }else{
            console.log("修改成功");
            res.json({
                code:0,
                message:"库存修改成功"
            })
        }
    })
})

router.get("/remove/:pid",(req,res)=>{
    let pid=req.params.pid;
    console.log(pid)
    Model_Product.remove({pid},(err,result)=>{
        if(err){
            console.log(err)
            res.json({
                code:123,
                message:"删除失败"
            })
        }else{
            console.log(result);
            res.json({
                code:0,
                message:"删除成功"
            })
        }
    })
})


async function CreateProduct({pid, pname, pprice, pcount, paddress}, cb) {
    //
    try {
        let result = await Model_Product.find({ pid })
        if (result.length > 0) {
            //chongfu
            cb({ message: "id重复" })
        } else {
            var p = new Model_Product({
                pid,
                pname,
                pprice,
                pcount,
                paddress
            })
            var data = await p.save();
            console.log("save suceess")
            cb({ message: "保存成功" })

        }
    }catch(ex){
        cb({ message: "发生错误" })
    }    
}
async function updateCount(pid,pcount,cb){
    Model_Product.update({pid},{$set:{pcount}},(err)=>{

    })
    
}

module.exports = router;

/**
 *
 *
 * //接收页面中form post过来的数据：
router.post("/add", (req, res) => {
    //post的数据是在哪里？
    console.log(req.body.pname);
    Model_Product.find({ pid: req.body.pid }, (err, result) => {
        if (err) {
            console.log(err);
            res.render("productadd", { message: "添加商品失败" })
        } else {
            if (result.length > 0) {
                //查到了相等的数据，不能添加
                res.render("productadd", { message: "商品标识重复" })
            } else {
                //调用mongoose 添加数据：
                var p = new Model_Product({
                    pid:req.body.pid,
                    pname: req.body.pname,
                    pprice: req.body.pprice,
                    pcount: req.body.pcount,
                    paddress: req.body.paddress
                })
                p.save((err, result) => {
                    if (err) {
                        console.log("存储报错了", err);
                        res.render("productadd", { message: "添加商品失败" })
                    } else {
                        console.log(result);
                        res.render("productadd", { message: "添加商品成功" })
                    }
                })
            }
        }
    })
})
 */