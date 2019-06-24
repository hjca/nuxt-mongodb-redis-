<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="home-swiper-area">
      <swiper-comp/>
    </div>

    <!-- 侧边栏 -->
    <side-menu-list/>
  </div>
</template>

<script>
import SwiperComp from '@/components/index/swiperComp.vue';
import SideMenuList from '@/components/index/sideMenu.vue';
export default {
  components: {
    SwiperComp,
    SideMenuList
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
  }
}
</style>
