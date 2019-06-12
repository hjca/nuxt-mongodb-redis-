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
    <nuxt-link to="/" class="menu-email-href">CEO邮箱</nuxt-link>

    <!-- 购物车 -->
    <nuxt-link to="/" class="menu-shopcart-href">
      <i class="icon-shopcart"/>
      购物车<span>{{ cartNum }} </span>件
    </nuxt-link>

    <!-- CLUB会员 -->
    <nuxt-link to="/" class="menu-userMember-href">CLUB会员</nuxt-link>
  
    <!-- 招商入驻 -->
    <nuxt-link to="/" class="menu-merchants-href">招商入驻</nuxt-link>

    <!-- 手机逛酒仙 -->
    <nuxt-link to="/" class="menu-phonewine-href">
      <div class="phoneArea">
        <i class="icon-phone"/>
      </div>
      手机逛酒仙
    </nuxt-link>

    <!-- 网站导航 -->
    <el-dropdown class="menu-intent-href">
      <span class="el-dropdown-link">
        <i class="el-icon-s-operation"/>
        网站导航
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

    <!-- 客户服务 -->
    <el-dropdown class="menu-khserver-href">
      <span class="el-dropdown-link">
        <i class="icon-server"/>
        客户服务
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

    <!-- 客服电话 -->
    <div class="menu-kf-phone">
      客服电话：
      <span>400-617-9999</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartNum:0
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
  font-size: 12px;
  padding-left: 30px;
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
  .menu-email-href{
    font-size: 12px;
    color: #999999;
    margin-right: 12px;
    color: #c00;
  }
  .menu-shopcart-href{
    color: #999999;
    font-size: 12px;
    display: flex;
    align-items: center;
    span{
      color:#c00;
      margin-top: 3px;
    }
    i{
      margin-right: 5px;
    }
    i:before{
      color:#c00;
    }
  }
  .menu-shopcart-href:hover{
    color: #c00;
  }
  .menu-userMember-href{
    color: #c00;
    margin: 0 10px;
  }
  .menu-merchants-href{
    padding: 0 10px;
    color: #999999;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }
  .menu-phonewine-href{
    margin: 0 5px;
    padding: 0 5px;
    background: #c00;
    color: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 2px;
    margin: 0 10px;
    .phoneArea{
      background: #ffffff;
      display: flex;
      align-items: center;
      .icon-phone:before{
        font-size: 12px;
      }
    }
  }
  .menu-intent-href{
    margin: 0 5px;
    i:nth-child(1){
      color: #c00;
    }
  }
  .menu-khserver-href{
    margin: 0 10px;
    i:nth-child(1){
      color: #c00;
      font-size: 15px;
    }
  }
  .menu-kf-phone{
    color: #999999;
    display: flex;
    align-items: center;
    span{
      color: #c00;
    }
  }
}
</style>
