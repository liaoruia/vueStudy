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
      <el-row>
        <el-col :span="4">

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
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-row>
      <!--分页-->
      <el-row>
        <el-col>

        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
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
