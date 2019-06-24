<!-- 侧边栏菜单 -->
<template>
  <div class="beer-side-menu-list">
    <!-- 我 -->
    <div class="beerUser default-side-menu">
      <div class="icon-area">
        <i class="icon-mine"/>
      </div>
      <p>我</p>

      <!-- 弹层 -->
      <div class="beer-side-user-mark">
        <!-- 头部信息 -->
        <div class="beer-side-user-header"></div>
      </div>
    </div>

    <!-- 收藏 -->
    <div class="collection default-side-menu">
      <div class="icon-area">
        <i class="icon-love"/>
      </div>
      <p>收藏</p>
    </div>

    <!-- 购物车 -->
    <div class="shopCart default-side-menu">
      <div class="icon-area">
        <i class="icon-shopcart"/>
      </div>
      <p>购</p>
      <p>物</p>
      <p>车</p>
    </div>

    <!-- 客服 -->
    <div class="shopCart default-side-menu">
      <div class="icon-area">
        <i class="icon-customer"/>
      </div>
      <p>客服</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style scoped lang="scss">
.beer-side-menu-list {
  width: 35px;
  height: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 0 4px 0 #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .default-side-menu {
    width: 100%;
    height: auto;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    .icon-area {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #c00;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2px;
    }
    p {
      padding: 2px 0 0;
      font-size: 12px;
      line-height: 16px;
      color: #333333;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  .default-side-menu:hover {
    background: #c00;
    .icon-area {
      background: #ffffff;
      i:before {
        color: #c00;
      }
    }
    p {
      color: #ffffff;
    }
  }
  .beer-side-user-mark{
    width: 270px;
    height: 283px;
    background: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    right: 35px;
    z-index: 1000000;
    border: 1px solid #ddd;
    border-right: 0;
    overflow: hidden;
  }
  .beer-side-user-header{
    height: 114px;
    padding: 18px 0 16px;
    display: flex;
    
  }
}
</style>