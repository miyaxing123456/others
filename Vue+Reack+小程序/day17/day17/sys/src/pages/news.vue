<template>
  <div>
    <add-btn v-if="type=='0'||type=='1'" @click.native="willAdd"></add-btn>

    <!-- 3.展示所有的用户信息 -->
    <div class="table-wrapper">
      <el-table :data="list" border stripe class="table" height="400">
        <el-table-column prop="tit" label="题目"></el-table-column>
      
        <el-table-column label="时间">
          <template slot-scope="scope">
            <div>{{scope.row.time|timeFilter}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button type="primary" class="btn-black" @click="look(scope.row.id)">查看</el-button>
              <del-btn :id='scope.row.id' @del="del(id)"  v-if="type=='0'||type=='1'"></del-btn>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 添加的弹框 -->
    <add-news :obj="obj" ref="add"></add-news>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import addNews from "../components/addNews";
import {  requestDelNews } from "../util/request";
import { successAlert } from "../util/alert";
export default {
  computed: {
    ...mapGetters({
      list: "news/list"
    })
  },
  data() {
    return {
      type:localStorage.getItem("type"),
      obj: {
        showDialog: false, //弹框出现的状态
        isAdd: true //如果是新增，就是true；如果是修改，就是false
      }
    };
  },
  methods: {
    ...mapActions({
      requestFindNewsAction: "news/requestFindNewsAction",
      changeIsRequestAction: "news/changeIsRequestAction"
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
      requestDelNews(id).then(res => {
          if (res) {
            successAlert(res.data.info);
            this.changeIsRequestAction(true);
            this.requestFindNewsAction();
          }
        });
    }
  },
  mounted() {
    //一进来页面就触发
    this.requestFindNewsAction();
  },
  components: {
    addNews
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
</style>