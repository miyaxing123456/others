const express = require("express");
const router = express.Router();
const querystring = require("querystring");
const http = require("http");
const Model_telver=require("../mongoose/telver")
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
            saveTELVer(tel,ranNum);
        }
        res.json({
            code: data.code,
            message: `${tel}短信已发送，请查收,验证码为:${ranNum}`
        })
    });

    

    // console.log(ranNum);    
})

function sendmsg(param, phone, cb) {
    try {
        const data = querystring.stringify({
            param,
            phone,
            sign: '1',
            skin: '1'
        });
        const options = {
            hostname: 'feginesms.market.alicloudapi.com',
            port: 80,
            path: '/codeNotice',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data),
                'Authorization': 'APPCODE 643dc87a391e4dac89636767d34e4210'
            }
        };
        const req = http.request(options, (res) => {
            console.log(`状态码: ${res.statusCode}`);
            console.log(`响应头: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            var dataAll = "";
            res.on('data', (chunk) => {
                dataAll += chunk;
                console.log(`响应主体: ${chunk}`);
            });
            res.on('end', () => {
                console.log('响应中已无数据');
                console.log(dataAll);
                var obj = JSON.parse(dataAll);
                cb(obj);
            });
        });

        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
            cb({
                code: "error",
                message: "出错"
            });
        });

        // 将数据写入请求主体。
        req.write(data);
        req.end();
    } catch (err) {
        console.log(err);
        cb({
            code: "error",
            message: "出错"
        });
    }

}

//存储手机号和验证码：
async function saveTELVer(phone,param){
    var result=await Model_telver.find({phone})
    if(result.length>0){
        //更新验证码
       await Model_telver.update({phone},{$set:{param}})
        console.log("更新")
    }else{
        var telver=new Model_telver({
            phone,
            param
        })
       await telver.save();
       console.log("保存")
    }    
}

module.exports = router;