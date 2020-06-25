const express=require("express");
const router=express.Router();
const Model_Banner=require("../mongoose/banner");
router.get("/index/get",(req,res)=>{
    //回复 banner数据;
    Model_Banner.find({type:0},(err,result)=>{
        if(err){
            console.log(err);
            res.json({
                code:123,
                message:"发生错误"
            })
        }else{
            console.log(result);
            res.json({
                code:0,
                message:"获取数据成功",
                data:result
            })
        }
    })
})
router.post("/index/add",(req,res)=>{
    //保存首页banner信息的
    //
    try{
        console.log("connect")
        var banner=new Model_Banner({
            big_img: req.body.b_big_img,
            small_img: req.body.b_small_img,
            video: req.body.b_video,
            title: req.body.b_title,
            number:req.body.b_number,
            actor: req.body.b_actor,
            kind: req.body.b_kind,
            content:req.body.b_content,
            createtime:new Date(),
            type:0
        })
        console.log("123")
        banner.save((err,result)=>{
            if(err){
                console.log(err);
                res.json({
                    code:1001,
                    message:"添加出错"
                })
            }else{
                console.log(result);
                res.json({
                    code:0,
                    message:"添加成功"
                })
            }
        })  
    }catch(ex){
        console.log(ex);
    }    
})

module.exports=router;

