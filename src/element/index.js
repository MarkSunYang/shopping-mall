import Vue from 'vue'

//导入弹窗提示组件
import { Message, Form, FormItem, Input, Button, Main, Aside, Header, Container, Menu, MenuItem,Submenu,MenuItemGroup } from 'element-ui'


//全局组件注册
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Container)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)

Vue.prototype.$message = Message