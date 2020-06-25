const mongoose = require("./db.js");

//schema 就是对表字段进行约束的规范。
const schema = new mongoose.Schema({
    big_img: { type: String },
    small_img: { type: String },
    video: { type: String },
    title: { type: String },
    number: { type: Number },
    actor: { type: String },
    kind: { type: Number },
    content: { type: String },
    createtime:{type:Date},
    type:{type:Number}
});

//这里就是 表product 跟约束 schema的映射；
//mongoose 把会表名字，变成复数： 可不仅仅是加个s   perple
const model = mongoose.model("banner", schema);

module.exports = model;