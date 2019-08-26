import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import store from './store'
//Vue中导入css基本样式
//全局守卫
router.beforeEach(function(to,from,next){
  //判断路由元信息存在 并且验证成功
  //matched数组存在当前路径各级祖先路径
  //祖先路径存在路由元信息需要被守卫
  //子路由同样会被守卫
  const flag =  to.matched.some(ele => ele.meta && ele.meta.login == true);
  if(flag){
      //通过cookie值就行验证用户是否已经登录
      const jump = document.cookie.includes("login=true");
      //如果用户登录了
      //就可以访问被守卫的路由了
      if(jump){
          next();
          return;
      }
      const login = window.confirm("你是否要登录?");
      if(login){
          next('/login');
      }else{
           return ;
      }
  }else{
     next();
  }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
