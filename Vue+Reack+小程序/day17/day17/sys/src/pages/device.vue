<template>
  <div>
    <add-btn @click.native="willAdd" v-if="type=='0'||type=='1'"></add-btn>

    <!-- 3.展示所有的用户信息 -->
    <div class="table-wrapper">
      <el-table :data="list" border stripe class="table" height="400">
        <el-table-column prop="ip" label="ip"></el-table-column>
        <el-table-column prop="door" label="机房"></el-table-column>
        <el-table-column prop="width" label="宽带"></el-table-column>
        <el-table-column prop="num" label="编号"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <div>{{scope.row.status==='1'?'空闲':'已出售'}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button  v-if="type=='0'||type=='1'" type="primary" class="btn-black" @click="look(scope.row.id)">查看</el-button>
              <del-btn  v-if="type=='0'||type=='1'" :id="scope.row.id" @del="del(id)"></del-btn>
              <el-button 
                v-else
                type="primary"
                class="btn-default"
                @click="addShop(scope.row.id)"
                :disabled="scope.row.status==='0'"
              >购买</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 添加的弹框 -->
    <add-device :obj="obj" ref="add"></add-device>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import addDevice from "../components/addDevice";
import { requestDelDevice, requestUpdateDevice } from "../util/request";
import { successAlert } from "../util/alert";
export default {
  computed: {
    ...mapGetters({
      list: "device/list"
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
      requestFindDeviceAction: "device/requestFindDeviceAction",
      changeIsRequestAction: "device/changeIsRequestAction"
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
      requestDelDevice(id).then(res => {
        if (res) {
          successAlert(res.data.info);
          this.changeIsRequestAction(true);
          this.requestFindDeviceAction();
        }
      });
    },
    //购买
    addShop(id) {
      requestUpdateDevice({ id: id, status: "0" }).then(res => {
        if (res) {
          successAlert("购买成功");
          this.changeIsRequestAction(true);
          this.requestFindDeviceAction();
        }
      });
    }
  },
  mounted() {
    //一进来页面就触发
    this.requestFindDeviceAction();
  },
  components: {
    addDevice
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
</style>