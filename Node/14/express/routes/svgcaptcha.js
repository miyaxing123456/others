const express=require("express");
const svgcaptcha=require("svg-captcha");
const router=express.Router();

router.get("/getsvg",(req,res)=>{
    var captchja=svgcaptcha.create();
    console.log(captchja.text);
    captchja.text;//验证码的 文本，（字符串）
    captchja.data;//svg 数据；
    res.send(captchja.data);
})

module.exports=router;