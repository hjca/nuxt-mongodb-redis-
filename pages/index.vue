<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="home-swiper-area">
      <swiper-comp/>
    </div>

    <!-- table菜单页切换 -->
    <el-row class="home-table-menu">
      <el-col :span="3" class="home-table-menu-left-adver">
        <img :src="leftImg">
      </el-col>
      <el-col :span="18">
        <menu-beer-comp/>
      </el-col>
      <el-col :span="3" class="home-table-menu-right-adver">
        <img :src="rightImg">
      </el-col>
    </el-row>

    <!-- 侧边栏 -->
    <side-menu-list/>
  </div>
</template>

<script>
import SwiperComp from '@/components/index/swiperComp.vue';
import SideMenuList from '@/components/index/sideMenu.vue';
import MenuBeerComp from '@/components/index/tableMenu.vue';
export default {
  components: {
    SwiperComp,
    SideMenuList,
    MenuBeerComp
  },
  data() {
    return {
      leftImg: 'http://img09.jiuxian.com/bill/2019/0625/2eb9d3e967ba43d99247534054ca1766.png',
      rightImg: 'http://img07.jiuxian.com/bill/2019/0625/675792ccc09a45db9a5094d2e3a97bb1.png'
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  .home-swiper-area{
    width: 100%;
    height: 470px;
    margin-bottom: 10px;
  }
  .home-table-menu{
    height: 1000px;
    .home-table-menu-left-adver,
    .home-table-menu-right-adver{
      overflow: hidden;
      img{
        height: 100%;
      }
    }
    .home-table-menu-left-adver{
      img{
        float: right;
      }
    }
  }
}
</style>
