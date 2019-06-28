<!-- 小轮播图 -->
<template>
  <div class="public-swiper-comp">
    <el-carousel :height="heightNum" arrow="never">
      <el-carousel-item v-for="(item,index) in swiperData" :key="index">
        <nuxt-link :to="item.url">
          <img :src="item.img" alt="">
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:{
    heightNum:{
      type: String,
      default: '157px'
    },
    swiperData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.public-swiper-comp {
  height: 100%;
  height: 100%;
  background: #ffffff;
  a{
    display: inline-block;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>