<!-- 登录区域内容 -->
<template>
  <div class="login-comp-area">
    <div class="login-header-title">用户登录</div>

    <div class="login-input-area">
      <el-input placeholder="用户名/邮箱" v-model="userAccount">
        <template slot="prepend">
          <i class="el-icon-user-solid"></i>
        </template>
      </el-input>

      <el-input placeholder="密码" v-model="userpassword">
        <template slot="prepend">
          <i class="el-icon-s-cooperation"></i>
        </template>
      </el-input>

      <el-button type="danger">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      userAccount: '', //用户账户
      userpassword: '' //用户密码
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.login-comp-area {
  width: 350px;
  height: 405px;
  background: #ffffff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .login-header-title {
    width: 270px;
    color: #e4393c;
    font-weight: bold;
    line-height: 40px;
    font-size: 16px;
    margin: 14px 0 19px;
    text-align: center;
    border-bottom: 1px solid #e9e9e9;
  }
  .login-input-area {
    flex: 1;
    width: 270px;
    .el-input{
      margin-bottom: 20px;
    }
    .el-button{
      width: 270px;
      height: 40px;
      background: #e10303;
    }
  }
}
</style>