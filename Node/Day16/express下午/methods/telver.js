//写一个验证 手机和和验证码的方法：
const Model_telver = require("../mongoose/telver");
function check(tel, param, cb) {
    Model_telver.find({ phone: tel, param }, (err, result) => {
        if (err) {
            console.log("查询报错了")
            cb({
                code: 12313,
                message: "异常"
            })
        } else {
            if (result.length > 0) {
                //通过的,保存其他数据
                cb({
                    code: 0,
                    message: "验证码正确"
                })
            } else {
                //错误的，直接返回响应
                cb({
                    code: 123131,
                    message: "验证码错误"
                })
            }
        }
    })
}

//存储手机号和验证码：
async function saveTELVer(phone, param) {
    var result = await Model_telver.find({ phone })
    if (result.length > 0) {
        //更新验证码
        await Model_telver.update({ phone }, { $set: { param } })
        console.log("更新")
    } else {
        var telver = new Model_telver({
            phone,
            param
        })
        await telver.save();
        console.log("保存")
    }
}

module.exports = {
    check,
    saveTELVer
}


