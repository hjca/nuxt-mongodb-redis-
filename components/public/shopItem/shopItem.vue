<!-- 商品 -->
<template>
  <div class="public-shop-item" @click="watchDetail">
    <!-- 旗帜标记 -->
    <div class="beer-flag" v-show="shopItemData.shopType && shopItemData.typeName.length">
      <span v-html="shopItemData.typeName"></span>
    </div>

    <!-- 商品图片 -->
    <el-image
      fit='fill'
      :src="shopItemData.shopImg"
    />

    <!-- 商品名称 -->
    <div class="beer-shop-name">
      <img v-show="shopItemData.shopType" src="http://misc.jiuxian.com/images/zhenxuan.jpg" alt="">
      <nuxt-link to="/" :title="shopItemData.shopName">{{ shopItemData.shopName }}</nuxt-link>
    </div>

    <!-- 商品金额 -->
    <div class="beer-shop-item-price">
      {{ shopItemData.price }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopItemData: {
      type: Object,
        default() {
        return {}
      }
    }
  },
  data () {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 查看详情
    watchDetail() {
      this.$router.push('/');
    }
  }
}

</script>
<style lang="scss">
.public-shop-item{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .beer-flag{
    width: 45px;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    background: url(http://misc.jiuxian.com/img/newIndexImg/TagBg.png) no-repeat center;
    background-size: 100% 100%;
    color: #ffffff;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    padding-top: 7px;
  }
  .el-image{
    width: 160px;
    height: 160px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .beer-shop-name{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6px;
    img{
      width: 72px;
      height: 16px;
      margin-right: 5px;
    }
    a{
      flex: 1;
      color: #666666;
      font-size: 12px;
      line-height: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    a:hover{
      color: #cc0000;
    }
  }
  .beer-shop-item-price{
    width: 100%;
    text-align: left;
    color: #cc0000;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>