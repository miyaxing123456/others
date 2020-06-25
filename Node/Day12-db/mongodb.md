mongodb:
mysql:
管理数据的程序：
结构：
创建一个数据库==》表table==> 一行代表一条数据；列就是数据的内容：

## mongodb的安装

## mongodb是一个服务：
计算机右键=》管理》服务和应用程序》服务>mongodb server
如果正常情况下：状态栏 是"已启动"


## mongodb 配置系统环境变量：
计算机右键》属性》高级系统设置》环境变量》系统变量中找到path》编辑》把mongodb的安装路径（D:\MongoDB\Server\4.2\bin）添加；并且跟之前的数据用分号隔开。（；）

### 如果无法启动：（）
在d盘创建一个文件夹d:\mongodbdata;
启动cmd 输入命令：  mongod --dbpath d:/mongodbdata 回车执行： 当前cmd 窗口是启动mongodb ，不要关闭，保持开发。


## 连接mongodb
-   启动一个cmd 》输入mongo   >


C:\Python27\;C:\Python27\Scripts;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;D:\MongoDB\Server\4.2\bin;C:\ProgramData\chocolatey\bin;
C:\Program Files\nodejs\
