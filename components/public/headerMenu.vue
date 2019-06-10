<template>
  <div class="defult-header-menu">
    <!-- 我的酒仙 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        我的酒仙
        <i class="el-icon-caret-bottom el-icon--right"/>
      </span>
      <el-dropdown-menu slot="dropdown" class="default-menu-style">
        <el-dropdown-item class="default-menu-style-item">
          <nuxt-link to="/">我的订单</nuxt-link>
        </el-dropdown-item>

        <el-dropdown-item class="default-menu-style-item">
          <nuxt-link to="/">物流跟踪</nuxt-link>
        </el-dropdown-item>

        <el-dropdown-item class="default-menu-style-item">
          <nuxt-link to="/">我的优惠券</nuxt-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- CEO邮箱 -->
    <nuxt-link to="/" class="menu-href">CEO邮箱</nuxt-link>

    <!-- 购物车 -->
    <nuxt-link to="/">
      购物车0件
      <i class=""/>>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss">
.defult-header-menu{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  span{
    font-size: 12px;
    color: #999999;
  }
  .el-dropdown{
    cursor: pointer;
    margin-right: 12px;
    span:hover{
      color: #c00;
    }
  }
  .menu-href{
    font-size: 12px;
    color: #999999;
    margin-right: 12px;
    color: #c00;
  }
}
</style>
