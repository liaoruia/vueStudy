<template>
  <div>
    <el-container>
      <el-menu unique-opened class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#404040" text-color="#fff" active-text-color="#fff">
        <div>
          <span style="display: inline-block;color:#fff;width:200px;height: 60px;line-height: 60px;text-align:center" v-if="!isCollapse">治趣后台管理系统</span>
          <span style="display: inline-block;color:#fff;width:64px;height: 60px;line-height: 60px;text-align:center" v-if="isCollapse"></span>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-jichushujuguanli"></i>
            <span slot="title">基础数据管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/userlist">
              <el-menu-item index="1-1">用户列表</el-menu-item>
            </router-link>
            <router-link to="">
              <el-menu-item index="1-2">标签字典管理</el-menu-item>
            </router-link>
            <router-link to="">
              <el-menu-item index="1-2">学习配置</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-container style="flex: 1;">
        <el-header style="line-height:60px;">
          <img src="../common/icon/navButton.png" class="navImg" @click="onShow">
          <span style="font-size:24px" class="jj">治趣管理平台</span>
          <span class="quit">{{ userData.user_name }}，你好！ <a type="text" @click="quit">【退出】</a></span>
        </el-header>
        <el-main>
          <router-view>

          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        userData: {
          user_name:'test'
        }
      }
    },
    mounted(){
      // this.userData = JSON.parse(window.localStorage.getItem("userData"))?JSON.parse(window.localStorage.getItem("userData")):{user_name: ''};
    },
    methods: {
      onShow() {
        this.isCollapse = !this.isCollapse
      },
      quit(){
        window.localStorage.clear();
        this.$router.push({
          path: '/'
        })
      }
    }
  }
  $(function() {
    $(".el-menu-item").click(function() {
//    alert(111);
      $(this).addClass('li-active');
    });
  })
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 245px;
    height: 100vh;
  }

  .el-menu-vertical-demo a{
    text-decoration: none;
  }
  .el-menu-vertical-demo a li{
    text-decoration: none;
  }
  .el-menu--collapse{
    height: 100vh;
  }

  .el-header, .el-footer{
    background-color:#ffffff;
  }
  .el-main{
    background-color:#f6f6fb;

  }
  .navImg{
    display: inline-block;
    clear: both;
    width:21px;
    height:21px;
    margin-right:23px;
    cursor:pointer;
  }
  .el-menu-item-group li:hover{
    color:#404040 !important;
    background-color:#ffffff !important;
  }
  .li-active{
    color:#404040 !important;
    background-color: #ffffff !important;
  }
  .quit{
    float:right
  }
  .quit>a{
    cursor:pointer
    color: red
  }
  i{
    margin-right:5px;
  }

</style>
