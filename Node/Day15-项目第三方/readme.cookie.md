### live server 频发刷新的问题：
1，找到live server的插件，，点击管理=》扩展设置=》默认是1000，（毫秒）改大点。重启vscode；


### mongodb server 启动不起来？
解决办法是：cmd 运行  mongod --dbpath  d:/dbdata 文件夹地址：

另外一个作用： 指定数据库的位置：如果指定的文件夹是d:/dbdata，那么mongodb的数据就存储在d:/dbdata 下面。
如果是服务的性质启动的mongodb，数据是存储的安装目录下面的D:\MongoDB\Server\4.2\data。

## cookie
express项目中的cookie的使用：
作用：在express项目的后端，可以设置客户端的cookie；
安装 cookie-parser
```javascript
var cookieParser = require('cookie-parser');
app.use(cookieParser());
```

在路由中：
```javascript
cookie(name: string, val: string, options: CookieOptions): Response<any>
Set cookie name to val, with the given options.

Options:
- `maxAge`   max-age in milliseconds, converted to `expires`
- `signed`   sign the cookie
- `path`     defaults to "/"
-  expires:new Date(Date.now() + 90000000)
Examples:
// "Remember Me" for 15 minutes
res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
```

### 中间件过滤用户登陆状态
```javascript
app.use("/api",function (req, res, next) {
  //检测时候有token
  var { token = req.body.token } = req.query;
  if (token && token.code == 0) {
    //登陆成功
    next();
  } else {
    res.json({
      code: 110,
      message: "请先登陆"
    })
  }
})
```

### 写svg的时候，图片设置大小：
```javascript
var svgCaptcha = require('svg-captcha');

app.get('/captcha', function (req, res) {
	var captcha = svgCaptcha.create({
        width:120
    });
	req.session.captcha = captcha.text;
	
	res.type('svg');
	res.status(200).send(captcha.data);
});
```

size: 4 // size of random string
width: number // width of captcha
height: number // height of captcha
fontSize: number // captcha text size

ignoreChars: '0o1i' // filter out some characters like 0o1i
noise: 1 // number of noise lines
color: true // characters will have distinct colors instead of grey, true if background option is set
background: '#cc9966' // background color of the svg image

charPreset: string // random character preset

