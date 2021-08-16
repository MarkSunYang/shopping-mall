<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form
        :model="loginform"
        :rules="loginformRules"
        ref="ruleForm"
        class="login_from"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="loginform.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginform.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="fromReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        username: "admin",
        password: "123456",
      },
      loginformRules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {},
    fromReset() {
      this.$refs.ruleForm.resetFields();
      console.log(this);
    },
    login() {
      this.$refs.ruleForm.validate(async (val) => {
        //是否通过验证
        if (!val) return;

        //请求的返回数据接收
        const { data: res } = await this.$http.post("login", this.loginform);
        console.log(res);

        // message弹窗
        if (res.meta.status !== 200) return this.$message.error("登录失败");
        this.$message.success("登录成功");

        // 将登录成功后的token 保存到客户端的sessionStorage中
        // 1.1 项目中除了登录之外其他API接口，必须在登录之后才能访问
        // 1.2 token 在当前网页打开期间生效
        //2.通过导航跳转到后台主页 路由地址是 /home

        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push('/home')
      });
    },
  },
};
</script>


<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #fff;
    left: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_from {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
