<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <span>电商管理系统后台</span>
      </div>

      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="iscollapse ? '64px' : '200px'">
        <div class="toggle-botton" @click="toggleCollapse">| | |</div>
        <!-- 侧边栏-->
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409BFF"
          unique-opened
          :collapse="iscollapse"
          :collapse-transition="false"
          router=""
          :default-active="activePath"
        >
          <!-- 一级-->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <!-- 一级模板-->
            <template slot="title">
              <!-- 图标-->
              <i class="el-icon-location"></i>
              <!-- 文本-->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单-->
            <el-menu-item
              :index="'/' + subitem.path"
              v-for="subitem in item.children"
              :key="subitem.id"
              @click="saveStatus('/' + subitem.path)"
            >
              <!-- 图标-->
              <i class="el-icon-menu"></i>
              <!-- 文本-->
              <span>{{ subitem.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      //是否折叠
      iscollapse: false,
      activePath: "",
    };
  },
  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
      console.log(res);
    },
    toggleCollapse() {
      //菜单的折叠展开
      this.iscollapse = !this.iscollapse;
    },
    saveStatus(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #545c64;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #fff;
}

.home_container {
  height: 100%;
}

.toggle-botton {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
}
</style>