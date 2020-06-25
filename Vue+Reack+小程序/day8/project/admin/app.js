// 整个后台项目的入口文件
const {port,app,MC,DBurl,multiparty} =  require('./config.js');
// 1-5 设置路由，进行访问

app.get('/',(req,res)=>{
    // // res.send('9876')
    // // render('页面路径',{传递参数})
    // let  info = [
    //     {
    //         id:1001,
    //         name:"关羽"
    //     },
    //     {
    //         id:1002,
    //         name:"张飞"
    //     },
    //     {
    //         id:1003,
    //         name:"刘备"
    //     }
    // ]
    // res.render('test',{
    //     name:"李四",
    //     info,
    // })
})

// ============商品分类模块============
//  分类显示（页面）、 分类添加（页面）、 修改（页面） 、 删除、执行添加、执行修改
// 加载显示页面
app.get('/type/index',(req,res)=>{

    // 加载页面
    res.render('type/index',{})
})
// 加载添加页面
app.get('/type/add',(req,res)=>{

    res.render('type/add',{})
})
// 执行添加
app.post('/type/doAdd',(req,res)=>{
    // res.send('1234567890')
    // 获取当前post传递过来的值  涉及到文件上传
    var form = new multiparty.Form();
    // 指定上传的文件目录  upload
    form.uploadDir = "upload";
    form.parse(req, function(err, fields, files) {
        //  fields  获取的是普通的post上传的内容 typename
        // files  获取的是文件上传的信息  typepic
        // console.log(fields,'---------------/////',files)
        let typename = fields.typename[0]; //获取到类别的名称
        let typepic = files.typepic[0].path;// 获取文件的存储路径
        let  data = {typename,typepic}
        // 执行数据库添加操作
        MC.connect(DBurl,(err,db)=>{
            // db 数据库引用
            // 连接表进行数据的添加
            db.collection('type').insertOne(data,(error,result)=>{
                // console.log(result)
                if(result.insertedId){
                    // 添加成功
                    res.send("<script>alert('类别添加成功!!!'); location.href='/type/index'; </script>")
                }else{
                    // 添加失败
                    res.send("<script>alert('类别添加失败!!!'); history.back(); </script>")
                }
            })
        })
    });

})

// 加载修改页面
app.get('/type/edit',(req,res)=>{

    res.render('type/edit',{})
})

// 1-4.监听
app.listen(port,()=>{
    console.log(`您的服务正在${port}端口运行！`)
})