<template>
  <div>
    <div class="boxnav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/main' }">
              <i class="icon icon-035xiaofangkuai"></i>首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单信息</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <div class="boxmain">
      <el-row class="boxtitle margin-b-20">
        <img src="../../common/icon/title-block.png" alt />
        <span>订单列表</span>
      </el-row>
      <el-row class="margin-b-20">
        <el-col :span="4">
          <el-input
            placeholder="手机号码"
            v-model="phone"
            class="input-with-select"
            size="small"
            style="width:98%;"
            clearable
            suffix-icon="el-icon-search"
          ></el-input>
        </el-col>
        <el-col :span="4">

        </el-col>
        <el-col :span="8" class="margin-b-20">
        </el-col>
        <el-col :span="6" class="margin-b-20">

        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="small" >搜索</el-button>
          <el-button type="primary" size="small" >重置</el-button>
        </el-col>
      </el-row>
      <el-row class="margin-b-20">
        <el-col :span="16">
          <el-button type="primary" size="small" >导出</el-button>
        </el-col>
      </el-row>
      <el-row class="margin-b-20">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="uid"
            label="UID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="uname"
            label="昵称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="phonenumber"
            label="电话号码"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="生日">
          </el-table-column>
          <el-table-column
            prop="work"
            label="职业">
          </el-table-column>
          <el-table-column
            prop="qq"
            label="qq">
          </el-table-column>
          <el-table-column
            prop="email"
            label="email">
          </el-table-column>
        </el-table>
      </el-row>
      <!--分页-->
      <el-row>
        <el-col>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="20"
              layout="prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { AJAX, API } from "@/api/function";
  export default {
    data() {
      return {
        tableData: [],
        currentPage3:0,
        total:0,
        phone:''
      }
    },
    mounted() {
      this.getlist();
    },
    methods:{
      getlist(){
        AJAX(API.GET_USER_LIST, {
          page:this.currentPage3,
          phone:this.phone
        }).then(res=>{
          this.tableData = res.data;
          this.total=res.total;
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage3 = val;
        this.getlist();
        console.log(`当前页: ${val}`);
      }

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/base.styl';

  .max_height {
    max-height: 100px;
    overflow-y: auto;
  }

  .max_height {
    max-height: 100px;
    overflow-y: auto;
  }
</style>
