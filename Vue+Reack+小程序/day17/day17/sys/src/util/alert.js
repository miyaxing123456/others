import Vue from "vue"
var vm = new Vue()
//成功弹框
export const successAlert = (info) => {
    vm.$message({
        message: info,
        type: "success"
    });
}

//失败
export const errorAlert = (info) => {
    vm.$message({
        message: info,
        type: "error"
    });
}

//警告
export const warningAlert = (info) => {
    vm.$message({
        message: info,
        type: "warning"
    });
}