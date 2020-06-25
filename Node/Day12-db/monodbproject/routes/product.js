const express=require("express");
const Model_Product=require("../mongoose/product.js")
const router=express.Router();
//打开添加产品的页面
router.get("/add",(req,res)=>{
    //此处的访问是返回 添加商品的页面
    res.render("productadd",{message:"请填写商品信息"})
})

//接收页面中form post过来的数据：
router.post("/add",(req,res)=>{
    //post的数据是在哪里？
    console.log(req.body.pname);
    //调用mongoose 添加数据：
    var p=new Model_Product({
        pname:req.body.pname,
        pprice:req.body.pprice,
        pcount:req.body.pcount,
        paddress:req.body.paddress
    })
    p.save((err,result)=>{
        if(err){
            console.log("存储报错了",err);
            res.render("productadd",{message:"添加商品失败"})            
        }else{
            console.log(result);
            res.render("productadd",{message:"添加商品成功"})
        }
    })
})

router.get("/list",(req,res)=>{
    //mongodb的查询：
    //第一个参数 查询条件 {}，代表的是任意数据；
    //如果是查询 pprice=100；查询条件： {pprice:100}
    Model_Product.find({},(err,result)=>{
        if(err){
            console.log("查询出错");
            res.render("plist",{message:"查询出错",data:[]})
        }else{
            console.log("获取数据成功");
            res.render("plist",{message:"加载所有数据",data:result})
        }
    })
})
module.exports=router;