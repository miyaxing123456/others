const http=require("http");
const fs=require("fs").promises;
let server = http.createServer(function(req,res){
	let htmlPath="";
	if (req.url=="/index"){
		htmlPath="index.html";
	}else if(req.url=="/phaser.min.js"){
		htmlPath="phaser.min.js";
	}
	else if(req.url=="/phaser.map"){
		htmlPath="phaser.map";
	}
	else if(req.url=="/assets/sky.png"){
		htmlPath="assets/sky.png";
	}
	else if(req.url=="/assets/star.png"){
		htmlPath="assets/star.png";
	}
	else if(req.url=="/assets/platform.png"){
		htmlPath="assets/platform.png";
	}
	else if(req.url=="/assets/dude.png"){
		htmlPath="assets/dude.png";
	}
	fs.readFile(htmlPath,"utf-8")
		.then((data)=>{res.end(data);})
		.catch(()=>{res.end("503 服务器报错")});
});
server.listen(8080,()=>{
	console.log("我的服务在8080端口已经启动");
});