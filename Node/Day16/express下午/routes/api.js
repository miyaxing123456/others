const express = require("express");
const router = express.Router();
let telver=require("../methods/telver")
let sendmsg=require("../methods/sendmsg");
router.get("/getver", (req, res) => {
    //有人要获取验证码
    var tel = req.query.tel;
    //生成一个验证码。然后调用阿里云的api，发送短信
    // 0：生成一个验证码
    //1，调用第三方API发送短信
    //2, 把手机号 验证码 的关系记录下来
    //0；
    var ranNum = "000" + parseInt(Math.random() * 10000);
    ranNum = ranNum.substr(-4, 4);
    //api发送短信
    sendmsg(ranNum, tel, (data) => {
        if(data.Code=="OK"){
            //把验证码手机号存储在数据库中；
            telver.saveTELVer(tel,ranNum);
        }
        res.json({
            code: data.code,
            message: `${tel}短信已发送，请查收,验证码为:${ranNum}`
        })
    });
})

router.post("/saveinfo",(req,res)=>{
    //先验证手机号和验证码
    //获取post数据并保存，
    var tel=req.body.tel;
    var param=req.body.param;
    var pname=req.body.pname;
    telver.check(tel,param,(data)=>{
        if(data.code==0){
            res.json({
                code:0,
                message:'baocuo'
            })
        }else{
            res.json({
                code:13201231,
                message:'cuowu'
            })
        }
    })    
})

module.exports = router;