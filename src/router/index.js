import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import index from '@/view/index/index'
import NavMenu from '@/view/NavMenu' // 导航菜单
// 主页面
// import main from '@/view/main/main';
let main = function(resolve) {
  require(['@/view/main/main'], resolve);
}
let index = function(resolve) {
  require(['@/view/index/index'], resolve);
}
let userlist = function(resolve) {
  require(['@/view/user/list'], resolve);
}
Vue.use(Router)

let devRoutes = {
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/main',
      name: 'NavMenu',
      component: NavMenu,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: main
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        }
      ]}
  ]
}

let routeData ={

};
let router;
if (process.env.NODE_ENV === 'development' || process.env.NODE_PRO) {
  router = new Router(devRoutes);
} else {
  let routes = routeData[window.__page__];
  router = new Router({ routes });
}

export default router;
