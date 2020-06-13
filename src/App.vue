<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "common/fontIcon/iconfont.css";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #app .el-menu-item {
    padding: 0 0 0 20px;
  }
  #app .el-menu {
    border-right: none;
    overflow-y: auto;
  }
  #app .el-main {
    padding: 0;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
  /*#app .el-main>div{*/
  /*height: 10000px;*/
  /*}*/
</style>
