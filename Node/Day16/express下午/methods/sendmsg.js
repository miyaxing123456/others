const querystring=require("querystring");
const http=require("http");
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


module.exports=sendmsg;