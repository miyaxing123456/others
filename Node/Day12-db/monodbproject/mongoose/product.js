const mongoose=require("./db.js");

//schema 就是对表字段进行约束的规范。
const schema=new mongoose.Schema({
    pname:{type:String},
    pprice:{type:Number},
    pcount:{type:Number},
    paddress:{type:String}
});

//这里就是 表product 跟约束 schema的映射；
//mongoose 把会表名字，变成复数： 可不仅仅是加个s   perple
const model=mongoose.model("product",schema);

module.exports=model;