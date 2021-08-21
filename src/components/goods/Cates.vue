<template>
  <div>
    <!-- 面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图-->
    <el-card class="box-card">
        <tree-table :data="cateList" :columns="columns"></tree-table> </tree-table
    ></el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //商品分类
      cateList: [],
      columns: [{ label: "分类名称", prop: "cat_name", width: "400px" }],
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 10,
      },
      total: 0,
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    async getCateList() {
      const { data: res } = await this.$http.get("categories", {
        params: this.queryInfo,
      });

      if (res.meta.status !== 200) return this.$message.error("数据获取失败");
      console.log(res.data);
      this.cateList = res.data.result;
      this.total = res.data.total;
    },
  },
};
</script>

<style lang="less" scoped>
</style>