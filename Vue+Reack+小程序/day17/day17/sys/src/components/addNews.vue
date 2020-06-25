<template>
  <div>
    <el-dialog :title="obj.isAdd?'新增通知':'修改通知'" :visible.sync="obj.showDialog">
      <el-row>
        <el-col :span="4">题目</el-col>
        <el-col :span="20">
          <el-input placeholder="请输入题目" v-model="user.tit" :disabled="type=='2'"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">内容</el-col>
        <el-col :span="20">
          <el-input type="textarea" placeholder="请输入内容" v-model="user.con"  :disabled="type=='2'"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">时间</el-col>
        <el-col :span="20">
          <el-date-picker type="date" v-model="user.time"  :disabled="type=='2'"></el-date-picker>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer text-center">
        <el-button class="btn-info" @click="cancel()">取 消</el-button>
        <el-button type="primary" class="btn-default" @click="add" v-if="obj.isAdd">添 加</el-button>
        <el-button type="primary" class="btn-default" v-if="!obj.isAdd&&(type=='0'||type==='1')" @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
 requestAddNews,
 requestUpdateNews,
 requestFindNews
} from "../util/request";
import { warningAlert, successAlert } from "../util/alert";
import { mapActions } from "vuex";
export default {
  props: ["obj"],
  components: {},
  data() {
    return {
      type:localStorage.getItem("type"),
      user: {
        tit: "",
        con: "",
        time: ""
      }
    };
  },
  methods: {
    ...mapActions({
      requestFindNewsAction: "news/requestFindNewsAction",
      changeIsRequestAction: "news/changeIsRequestAction"
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
        tit: "",
        con: "",
        time: ""
      };
    },
    //确定添加
    add() {
      
      //时间转换为时间戳传递
      this.user.time = new Date(this.user.time).getTime();

      //添加请求
      requestAddNews(this.user).then(res => {
        if (res) {
          //弹了添加成功
          successAlert(res.data.info);
          //user重置了
          this.empty();
          //弹框消失
          this.cancel();
          //manage组件要重新查询用户
          this.changeIsRequestAction(true);
          this.requestFindNewsAction();
        }
      });
    },
    //根据id查询
    find(id) {
      //发起根据id查询管理员请求
      requestFindNews({ id: id }).then(res => {
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

      requestUpdateNews(this.user).then(res => {
        if (res) {
          successAlert(res.data.info);
          this.empty();
          this.cancel();
          this.changeIsRequestAction(true);
          this.requestFindNewsAction();
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