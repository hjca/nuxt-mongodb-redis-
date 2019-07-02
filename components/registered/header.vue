<!-- 注册页面的头部 -->
<template>
  <div class="registered-header">
    <el-row>
      <el-col :span="4" class="default">1</el-col>
      <el-col :span="16" class="registered-header-content">
        <div class="registered-header-content-left">
          <nuxt-link to="/"></nuxt-link>
          <img src="https://login.jiuxian.com/img/reg/slogan.jpg" alt="">
        </div>

        <div class="registered-header-content-right">
          <span>欢饮来到酒仙网！</span>
          <nuxt-link to="/login" v-if="control">请登录</nuxt-link>
          <nuxt-link to="/login/registered" v-else>免费注册</nuxt-link>
          <el-dropdown>
            <span class="el-dropdown-link">
              帮助中心<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>配送说明</el-dropdown-item>
              <el-dropdown-item>支付方式</el-dropdown-item>
              <el-dropdown-item>售后服务</el-dropdown-item>
              <el-dropdown-item>企业方式</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    <el-col :span="4" class="default">3</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },

  components: {},

  computed: {
    control() {
      let result = this.$route.path.indexOf("registered") > 0 ? true : false;
      return result;
    }
  },

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.registered-header {
  width: 100%;
  height: 88px;
  .el-row {
    height: 100%;
    .default {
      color: #ffffff;
    }
    .el-col {
      height: 100%;
    }
    .registered-header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .registered-header-content-left {
        width: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          width: 140px;
          height: 63px;
          background: url(https://login.jiuxian.com/img/header/left.jpg?version=20160401)
            no-repeat left center;
        }
      }
      .registered-header-content-right {
        width: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          color: #999;
          font-size: 12px;
          margin-top: 30px;
        }
        a {
          color: #0066cc;
          margin-left: 20px;
          font-size: 12px;
          margin-top: 30px;
        }
        .el-dropdown{
          margin-left: 20px;
          font-size: 12px;
          margin-top: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>