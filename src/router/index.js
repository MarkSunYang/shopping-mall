import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import WelCome from '@/views/Welcome.vue'
import Users from '@/components/user/Users.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },//路由重定向
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/welcome', 
      children:[
        {path:'/welcome',component:WelCome},
        {path:'/users',component:Users}
      ]
    }
  ]
})

//挂载守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径来
  //next 一个函数表示放行
  // next() 放行    next('/login') 强制跳转

  if (to.path === '/login') return next()
  //获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
