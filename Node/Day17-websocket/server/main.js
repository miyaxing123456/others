const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
//监听 connection 事件，如果有客户端连接这个服务，事件触发。
var arr=[];
wss.on('connection', function connection(ws) {
    //接收数据
    arr.push(ws);
    ws.on('message', function incoming(message) {
        console.log('接收到消息 %s', message);
        //把这条消息，分发给所有的客户端：
        var obj=JSON.parse(message);
        for(iws of arr){
            iws.send(`${obj.name}说：${obj.msg}`);
        }
    });
    //发送数据
    ws.send('你好客户端');
});

