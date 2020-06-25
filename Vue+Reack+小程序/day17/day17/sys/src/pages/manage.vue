<template>
  <div class="manage">
    <add-btn @click.native="willAdd"></add-btn>

    <!-- 3.展示所有的管理员信息 -->
    <div class="table-wrapper">
      <el-table :data="arr" border stripe class="table" height="400">
        <el-table-column prop="name" label="账号"></el-table-column>
        <el-table-column prop="prop" label="属性"></el-table-column>
        <el-table-column label="时间">
          <template slot-scope="scope">
            <div>{{scope.row.time|timeFilter}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button type="primary" class="btn-black" @click="look(scope.row.id)">查看</el-button>
              <del-btn :id="scope.row.id" @del="del(id)"></del-btn>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加的弹框组件 -->
    <add-manage :obj="obj" @init="init" ref="add"></add-manage>
  </div>
</template>
<script>
import { requestFindManage, requestDelManage } from "../util/request";
import { errorAlert, successAlert } from "../util/alert";
import addManage from "../components/addManage";
export default {
  props: [],
  components: {
    addManage
  },
  data() {
    return {
      arr: [], //所有管理员数据
      obj: {
        showDialog: false, //弹框出现的状态
        isAdd: true //如果是新增，就是true；如果是修改，就是false
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 1.一进来获取所有的管理员数据
      //2. 失败的情况 响应拦截已经做了
      requestFindManage({}).then(res => {
        if (res) {
          //请求成功
          successAlert(res.data.info);
          this.arr = res.data.data;
        }
      });
    },
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

      // 根据id查询一条管理员数据 {id:"",name:"",pass:"",prop:"",time:""}
      //manage组件想要调用addManage组建的find方法
      this.$refs.add.find(id);
    },
    //删除
    del(id) {
      requestDelManage(id).then(res => {
        if (res) {
          successAlert(res.data.info);
          this.init();
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
</style>