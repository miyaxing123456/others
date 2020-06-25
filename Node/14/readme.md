### 前后端项目
-   分离模式：
    分为两个项目：
    -   web端 主要写html css js 、资源：img 字体。
        浏览器中渲染的，通过ajax 访问serve接口获取数据到客户端。
    -   serve端 业务逻辑，提供api接口，数据操作（sql）。
    
-   不分离：
    -   一个项目。    
    -   web页面，是在服务器端渲染。（ejs，art-template）


## 分离项目的启动;
-   创建两个项目web和serve；
-   web=》html css js  img =》vue react ；
-   serve=>nodejs=>express=>

web项目：
-   暴风影音：

server：
-   创建express项目
    >express --view=ejs bfserve
    >cnpm i    安装需要的包
    >npm start 启动项目；
-   功能开发：
    -   api开发：实际上就是router（路由）的开发：
        -   路由的设计=》url设计， app.js  router.js
                     =》数据结构：
    -   数据库开发;
        - mongodb:(mongoose包)
        -   db.js
        -   table.js
        -   增删改查的方法

## 第三方的工具：
## nodemon 热启动
-   全局安装： >cnpm i nodemon -g
-   创建nodemon.json 配置文件，在项目的根目录下
    用nodemon 替代 启动的npm 命令；代替node命令
## serve-favicon 中间件：favicon图标
-   安装： >cnpm i serve-favicon --save
-   app.js 中加载包：

```javascript
var serveFavicon=require("serve-favicon");
app.use(serveFavicon(path.join(__dirname,"public","favicon.ico")))
```
### svg-captcha 生成验证码：
-   安装： >cnpm i svg-captcha --save
-   在路由：加载包：并设计一个路由：
```javascript
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
```
在页面中添加svg
```html
<object data="captcha/getsvg" type="image/svg+xml"></object>
```

## 第三方的api接口：

