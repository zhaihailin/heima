<template>
  <div class="login-container">
    <el-card class="login-card">
      <img src="../../assets/images/logo_index.png" alt />

      <el-form rules="rules" ref="loginForm" :model="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm" placeholder="请输入验证码" style="width:140px"></el-input>
          <el-button style="float:right" type="primary">验证信息</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true" style="margin-bottom:0">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error("手机格式不正确"))
      }
    };
    return {
      loginForm: { mobile: "", code: "" },
      rules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: '请输入6位数字', trigger: 'blur' }
          ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.login-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
}
img {
  width: 200px;
  height: 40px;
}
</style>
