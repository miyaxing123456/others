const express = require("express");
const Model_Product = require("../mongoose/product.js")
const router = express.Router();

//接口
router.get("/productlist", (req, res) => {   
    Model_Product.find({}, (err, result) => {
        if (err) {
            console.log("查询出错");            
            res.json({
                code:3001,
                message:"获取数据失败",
                data:[]
            })
        } else {
            console.log("获取数据成功");
            res.json({
                code:0,
                message:"成功获取数据",
                data:result
            })
        }
    })
})

router.get("/removeproduct/:pid",(req,res)=>{
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

module.exports = router;
