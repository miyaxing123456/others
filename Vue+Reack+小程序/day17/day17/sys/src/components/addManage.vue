<template>
  <div>
    <el-dialog :title="obj.isAdd?'新增管理员':'修改管理员'" :visible.sync="obj.showDialog">
      <el-row>
        <el-col :span="4">账号</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入账号" v-model="user.name" :disabled="!obj.isAdd"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">密码</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入密码" show-password v-model="user.pass" :disabled="!obj.isAdd"></el-input>
        </el-col>
      </el-row>
      <el-row v-if="obj.isAdd">
        <el-col :span="4">确认密码</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入确认密码" show-password v-model="confirm"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">属性</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入属性" v-model="user.prop"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">时间</el-col>
        <el-col :span="20">
          <el-date-picker type="date" v-model="user.time"></el-date-picker>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer text-center">
        <el-button class="btn-info" @click="cancel()">取 消</el-button>
        <el-button type="primary" class="btn-default" @click="add" v-if="obj.isAdd">添 加</el-button>
        <el-button type="primary" class="btn-default" v-else @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  requestAddManage,
  requestFindManage,
  requestUpdateManage
} from "../util/request";
import { warningAlert, successAlert } from "../util/alert";
export default {
  props: ["obj"],
  components: {},
  data() {
    return {
      user: {
        name: "",
        pass: "",
        prop: "",
        time: ""
      },
      confirm: "" //确认密码
    };
  },
  methods: {
    //弹框消失
    cancel() {
      if (!this.obj.isAdd) {
        this.empty();
      }
      this.obj.showDialog = false;
    },
    //user重置
    empty() {
      this.user = {
        name: "",
        pass: "",
        prop: "",
        time: ""
      };
      this.confirm=""
    },
    //确定添加
    add() {
      if (this.user.pass !== this.confirm) {
        warningAlert("两次密码不一致");
        return;
      }
      //时间转换为时间戳传递
      this.user.time = new Date(this.user.time).getTime();

      //添加请求
      requestAddManage(this.user).then(res => {
        if (res) {
          //弹了添加成功
          successAlert(res.data.info);
          //user重置了
          this.empty();
          //弹框消失
          this.cancel();
          //manage组件要重新查询管理员
          this.$emit("init");
        }
      });
    },
    //根据id查询
    find(id) {
      //发起根据id查询管理员请求
      requestFindManage({ id: id }).then(res => {
        if (res) {
          this.user = res.data.data[0];
          this.user.time = new Date(parseInt(this.user.time));
          delete this.user._id;
        }
      });
    },
    //修改
    update() {
      this.user.time = new Date(this.user.time).getTime();

      requestUpdateManage(this.user).then(res => {
        if (res) {
          successAlert(res.data.info);
          this.empty();
          this.cancel();
          this.$emit("init");
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-col {
  line-height: $inputHeight;
  margin-bottom: $margin;
  text-align: center;
  color: $black;
}
</style>