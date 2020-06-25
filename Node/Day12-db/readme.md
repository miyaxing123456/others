
-   商品的增删改查：（数据库）
## 创建项目：
-   express-generater创建项目
    >express --view=ejs myproject
-   cnpm i

-   增加的商品的页面、路由、商品的提交的数据。路由中能够拿到这些数据。，
-   把数据存放到mongodb

### studio 3T  


### 项目的步骤：
### 创建项目
-   express --view=ejs myproject
-   cnpm i 安装需要的包
-   写一个添加商品的页面 views/productadd.ejs
-   路由：routers/product.js
-   app.js 启动这个路由
## mongodb
-在nodejs中，可以直接用mongodb；
-   mongodb存储的数据，列没有限制。
-   mongoose包：
-   安装mongoose包  >cnpm i mongoose --save

http://www.mongoosejs.net/

### 用mongoose 连接数据库：
-   在项目下创建一个 mongoose/db.js 用来连接数据库
-   创建mongoose/product.js 用来操作表.
-   在路由 product.js中使用mongoose 存储数据


### 加载数据的页面： 查询
-   查询页面： views/plist.ejs


完善 查询功能；
完善 添加的时候，id的唯一性验证。




