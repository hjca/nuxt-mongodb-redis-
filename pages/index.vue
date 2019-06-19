<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="home-swiper-area">
      <swiper-comp/>
    </div>
  </div>
</template>

<script>
import SwiperComp from '@/components/index/swiperComp.vue';
export default {
  components: {
    SwiperComp
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
