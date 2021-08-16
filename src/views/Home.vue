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
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
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
    display: flex ;
    align-items: center;
    span{
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333747;
}

.el-main {
  background-color: #fff;
}

.home_container {
  height: 100%;
}
</style>