<template>
  <div class="defult-header-menu">
    <!-- 我的酒仙 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        我的酒仙
        <i class="el-icon-arrow-down el-icon--right"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <nuxt-link to="/">我的订单</nuxt-link>
        </el-dropdown-item>

        <el-dropdown-item>
          <nuxt-link to="/">物流跟踪</nuxt-link>
        </el-dropdown-item>

        <el-dropdown-item>
          <nuxt-link to="/">我的优惠券</nuxt-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
    span:hover{
      color: #c00;
    }
  }
}
</style>
