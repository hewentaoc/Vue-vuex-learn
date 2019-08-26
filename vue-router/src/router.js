import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// views代表页面目录
// '/' 代表 views 

Vue.use(Router);


// path是路径. 比如说你在开发环境的地址是127.0.0.1:8888
// 那么你访问的路由地址是:127.0.0.1:8888/foo 以此类推
// '/' —— 代表的是根路径
export default new Router({
  mode:'history',
  linkExactActiveClass:'exact-active',
  linkActiveClass:'link-active',
  routes: [
    {
      path:'/',
      // 重定向
      redirect:'./home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // 路由独享守卫
      beforeEnter(to,from,next){
           next();
      }
    },
    {
      path:'/student',
      name:'student',
      component:() => import('./views/Student.vue'),
      meta:{
        login:true,
      }
    },
    {
      path:'/community',
      name:'community',
      component:() => import('./views/Community.vue'),
      redirect:'/community/ourjs',
      // 路由元信息,给路由加上一个信息,需要该路由登录后才能展示
      meta:{
          login:true,
      },
      children:[
        {
          path:'ourhtml',
          name:'ourhtml',
          component:() => import('./views/Ourhtml.vue')
        },
        {
          path:'ourcss',
          name:'ourcss',
          component: () => import('./views/Ourcss.vue'),
        },
        {
          path:'ourjs',
          name:'ourjs',
          component: () => import('./views/Ourjs.vue'),
        }
      ]
    },
    {
      path:'/person',
      name:'person',
      component: () =>import('./views/Person.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/notfound',
      component: ()=> import('./views/Notfound.vue')
    },
    // 动态路由
    {
       path:'/question/:id',
       name:'question',
       component: ()=> import('./views/Question')
    },
    // 登录路由
    {
      path:'/login',
      name:"login",
      component:() => import('./views/Login')
    },
    {
      path:'*',
      redirect(){
        return '/notfound'
      }
    }
  ]
})
