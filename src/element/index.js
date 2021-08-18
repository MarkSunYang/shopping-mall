import Vue from 'vue'

//导入弹窗提示组件
import {
    Message, Form, FormItem, Input, Button, Main, Aside, Header,
    Container, Menu, MenuItem, Submenu, MenuItemGroup,
    Breadcrumb, BreadcrumbItem, Card, Row, Col,
    Table,TableColumn,Switch,Tooltip,Pagination,Dialog,Tag,MessageBox,Tree
} from 'element-ui'


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
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm