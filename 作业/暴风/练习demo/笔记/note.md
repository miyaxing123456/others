1.下一个插件  Easy Less

2.文件 => 首选项 => 设置 => 输入easy => 在setting.json中编辑

3.修改下面的内容

 "less.compile": {
        "compress": false, // true => remove surplus whitespace
        "sourceMap": false, // true => generate source maps (.css.map files)
        "out": "../css/", // false => DON'T output .css files (overridable per-file, see below)
    }



### 我们自己利用node.js搭建一个本地的服务器
- node.js编写服务怎么去启动
- 下载node环境  -->node.js官网（中文）   https://nodejs.org/zh-cn/
- 点击下载 长期支持版本
- 下载完成之后点击安装  无脑操作下一步  建议目前我们为了起一个服务直接安装到C盘  
- 怎么启动当前node.js编写的文件
    - 1
    - 找到这个文件
    - Window + R -->运行  在运行中输入cmd  弹出一个窗口可以执行DOS命令脚本
    - 找到server.js文件(cd 当前这个server.js文件的文件目录，手动拖到命令窗口。然后回车相当于进入到了这个目录下)    在命令窗口中输入  node server.js
    - 服务已经启动了，我们想要结束当前服务  CTRL + C  这个服务就结束了


    -2.直接找到当前这个文件（server.js文件）所在目录，在地址栏上输入cmd ,弹出对应的DOS窗口  输入node.srver.js  服务就起来了


    -3.运行这个服务的页面
        - 就浏览器上输入http://127.0.0.1:8080/comment.html







