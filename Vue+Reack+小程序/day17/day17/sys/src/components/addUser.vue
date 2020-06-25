<template>
  <div>
    <el-dialog :title="obj.isAdd?'新增用户':'修改用户'" :visible.sync="obj.showDialog">
      <el-row>
        <el-col :span="4">账号</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入账号" v-model="user.name" ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">密码</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入密码" show-password v-model="user.pass" ></el-input>
        </el-col>
      </el-row>
      <el-row v-if="obj.isAdd">
        <el-col :span="4">确认密码</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入确认密码" show-password v-model="confirm"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">邮箱</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入邮箱" v-model="user.email" ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">电话</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入电话" v-model="user.tel" ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">性别</el-col>
        <el-col :span="20">
          <el-radio v-model="user.sex" label="男" :disabled="!obj.isAdd">男</el-radio>
          <el-radio v-model="user.sex" label="女" :disabled="!obj.isAdd">女</el-radio>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">身份证号</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入身份证号" v-model="user.idx" :disabled="!obj.isAdd"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">备注</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入备注" v-model="user.des"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">生日</el-col>
        <el-col :span="20">
          <el-date-picker type="date" v-model="user.time" :disabled="!obj.isAdd"></el-date-picker>
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
  requestAddUser,
  requestFindUser,
  requestUpdateUser
} from "../util/request";
import { warningAlert, successAlert } from "../util/alert";
import { mapActions } from "vuex";
import {regTel,regIdx} from "../util/reg"
export default {
  props: ["obj"],
  components: {},
  data() {
    return {
      user: {
        name: "",
        pass: "",
        email: "",
        tel: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
      },
      confirm: "" //确认密码
    };
  },
  methods: {
    ...mapActions({
      requestFindUserAction: "user/requestFindUserAction",
      changeIsRequestAction: "user/changeIsRequestAction"
    }),
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
        email: "",
        tel: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
      };
      this.confirm = "";
    },
    //确定添加
    add() {
      if (this.user.pass !== this.confirm) {
        warningAlert("两次密码不一致");
        return;
      }
      if(!regTel(this.user.tel)){
        warningAlert("手机号格式不正确");
        return
      }

      if(!regIdx(this.user.idx)){
        warningAlert("身份证号格式不正确");
        return
      }

      //时间转换为时间戳传递
      this.user.time = new Date(this.user.time).getTime();

      //添加请求
      requestAddUser(this.user).then(res => {
        if (res) {
          //弹了添加成功
          successAlert(res.data.info);
          //user重置了
          this.empty();
          //弹框消失
          this.cancel();
          //manage组件要重新查询用户
          this.changeIsRequestAction(true);
          this.requestFindUserAction();
        }
      });
    },
    //根据id查询
    find(id) {
      //发起根据id查询管理员请求
      requestFindUser({ id: id }).then(res => {
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

      requestUpdateUser(this.user).then(res => {
        if (res) {
          successAlert(res.data.info);
          this.empty();
          this.cancel();
          this.changeIsRequestAction(true)
          this.requestFindUserAction();
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