// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/gobal.css'
import './assets/fonts/iconfont.css'
import './element/index.js'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

import TreeTable from 'vue-table-with-tree-grid'

// 配置
axios.defaults.baseURL='http://timemeetyou.com:8889/api/private/v1'

//  axios拦截器设置请求头
axios.interceptors.request.use(config =>{
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')

  return config
})

Vue.prototype.$http = axios


Vue.config.productionTip = false
Vue.component('tree-table',TreeTable)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
