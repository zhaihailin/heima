<template>
  <div class="login-container">
    <el-card class="login-card">
<img src="../../assets/images/logo_index.png" alt="">
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  background:url(../../assets/images/login_bg.jpg) no-repeat  center / cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.login-card {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 300px;
height: 300px;
}
</style>
