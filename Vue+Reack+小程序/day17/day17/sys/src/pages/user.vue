<template>
  <div>
    <add-btn @click.native="willAdd"></add-btn>

    <!-- 3.展示所有的用户信息 -->
    <div class="table-wrapper">
      <el-table :data="list" border stripe class="table" height="400">
        <el-table-column prop="name" label="账号"></el-table-column>
        <el-table-column prop="tel" label="电话"></el-table-column>
        <el-table-column prop="idx" label="身份号"></el-table-column>
        <el-table-column label="生日">
          <template slot-scope="scope">
            <div>{{scope.row.time|timeFilter}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button type="primary" class="btn-black" @click="look(scope.row.id)">查看</el-button>
              <del-btn :id='scope.row.id' @del="del(id)"></del-btn>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 添加的弹框 -->
    <add-user :obj="obj" ref="add"></add-user>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import addUser from "../components/addUser";
import { requestDelUser } from "../util/request";
import { successAlert } from "../util/alert";
export default {
  computed: {
    ...mapGetters({
      list: "user/list"
    })
  },
  data() {
    return {
      obj: {
        showDialog: false, //弹框出现的状态
        isAdd: true //如果是新增，就是true；如果是修改，就是false
      }
    };
  },
  methods: {
    ...mapActions({
      requestFindUserAction: "user/requestFindUserAction",
      changeIsRequestAction: "user/changeIsRequestAction"
    }),
    //点击了新增按钮，弹框出现
    willAdd() {
      this.obj.showDialog = true;
      this.obj.isAdd = true; //新增
    },
    //点击了查看按钮
    look(id) {
      //弹框出现
      this.obj.showDialog = true;
      this.obj.isAdd = false; //修改
      this.$refs.add.find(id);
    },
    //删除
    del(id) {
      requestDelUser(id).then(res => {
          if (res) {
            successAlert(res.data.info);
            this.changeIsRequestAction(true);
            this.requestFindUserAction();
          }
        });
    }
  },
  mounted() {
    //一进来页面就触发
    this.requestFindUserAction();
  },
  components: {
    addUser
  },
  beforeRouteEnter (to, from, next) {
    var type=localStorage.getItem("type");
    if(type=="0"||type=="1"){
      next();
    }else{
      next("/index/welcome")
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
</style>