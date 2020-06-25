<template>
  <div>
    <el-dialog :title="obj.isAdd?'新增设备':'修改设备'" :visible.sync="obj.showDialog">
      <el-row>
        <el-col :span="4">ip</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入ip" v-model="user.ip"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">机房</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入机房" v-model="user.door"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">编号</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入编号" v-model="user.num"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">宽带</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入宽带" v-model="user.width"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">状态</el-col>
        <el-col :span="20">
          <el-radio v-model="user.status" label="1" >空闲</el-radio>
          <el-radio v-model="user.status" label="0" >已出售</el-radio>
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
  requestAddDevice,
  requestFindDevice,
  requestUpdateDevice
} from "../util/request";
import { warningAlert, successAlert } from "../util/alert";
import { mapActions } from "vuex";
export default {
  props: ["obj"],
  components: {},
  data() {
    return {
      
      user: {
        ip: "",
        door: "",
        num: "",
        width: "",
        status: ""
      }
    };
  },
  methods: {
    ...mapActions({
      requestFindDeviceAction: "device/requestFindDeviceAction",
      changeIsRequestAction: "device/changeIsRequestAction"
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
        ip: "",
        door: "",
        num: "",
        width: "",
        status: ""
      };
    },
    //确定添加
    add() {

      //添加请求
      requestAddDevice(this.user).then(res => {
        if (res) {
          //弹了添加成功
          successAlert(res.data.info);
          //user重置了
          this.empty();
          //弹框消失
          this.cancel();
          //manage组件要重新查询用户
          this.changeIsRequestAction(true);
          this.requestFindDeviceAction();
        }
      });
    },
    //根据id查询
    find(id) {
      //发起根据id查询管理员请求
      requestFindDevice({ id: id }).then(res => {
        if (res) {
          this.user = res.data.data[0];
          
          delete this.user._id;
        }
      });
    },
    //修改
    update() {
      

      requestUpdateDevice(this.user).then(res => {
        if (res) {
          successAlert(res.data.info);
          this.empty();
          this.cancel();
          this.changeIsRequestAction(true);
          this.requestFindDeviceAction();
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