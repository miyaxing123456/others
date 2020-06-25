var express = require('express');
var router = express.Router();
const Model_user = require("../mongoose/users")
const scrypto=require("../scrypto/scrypto");

//登录接口
router.post("/login", (req,res) => {
  //拿到登陆用户，并验证；
  var tel = req.body.tel;
  var pwd = req.body.pwd;
  Model_user.find({tel,pwd},(err,result)=>{
    // if(err) console.log(err)
    Date.now()
    var time=new Date()
    time.setDate(time.getDate()+7);
    if(result.length>0){     
      var token={
        code:0,
        tel,
        message:"token",
        time
      }   
      //加密：
      token=scrypto.scrypt(JSON.stringify(token));
      console.log(token);
      res.json({
        code:0,
        message:"登陆成功",
        token
      })
    }else{
      //用户名或密码错误
      res.json({
        code:0,
        message:"用户名或密码错误"
      })
    }    
  })
})

//注册接口
router.get("/register", (req, res) => {
  //拿到用户的注册信息，保存到数据库中：
  var tel = req.query.tel;
  var pwd = req.query.pwd;
  res.cookie("token","1001",{
    expires:new Date(Date.now() + 90000000)
  })
  saveUser(tel, pwd,(data)=>{
    res.json(data);
  });
})

async function saveUser(tel, pwd, cb) {
  try {
    var userFind = await Model_user.find({ tel });
    if (userFind.length == 0) {
      //没有重复的tel，可注册；
      var user = new Model_user({
        tel,
        pwd
      })
      await user.save();
      cb({
        code: 0,
        message: "注册成功"
      })
    } else {
      //已存在该手机号,不可注册
      cb({
        code: 1233,
        message: "手机号已注册"
      })
    }
  } catch (ex) {
    console.log(ex);
    cb({
      code: 10002,
      message: "报错了",
    })
  }
}
module.exports = router;
