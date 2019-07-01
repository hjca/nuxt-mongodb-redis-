<!-- 轮播图 -->
<template>
  <div class="public-swiper-classify">
    <el-carousel
      :height="swiperOption.height"
      :arrow="swiperOption.arrow"
      >
      <el-carousel-item v-for="(item,idx) in swiperList" :key="idx">
        <nuxt-link to="/">
          <img :src="item.img">
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      swiperOption: {
        height: '485px',
        arrow: 'never'
      },
      swiperList: [
        {
          id: 0,
          img: 'http://img06.jiuxian.com/bill/2019/0619/badf059ca7f44d7f9cb28eab35bd0f3d.png'
        },
        {
          id: 1,
          img: 'http://img08.jiuxian.com/bill/2019/0629/01c8f3fb87054260bd0d69ea67500dd8.jpg'
        },
        {
          id: 2,
          img: 'http://img07.jiuxian.com/bill/2019/0507/bdfc324a56dc4b03aa6f59bbccb586c0.jpg'
        },
        {
          id: 3,
          img: 'http://img08.jiuxian.com/bill/2018/1004/f8f0807fd91545fc8dad1ade0859c0f1.jpg'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="scss">
.public-swiper-classify{
  width: 100%;
  height: 100%;
  a,img{
    width: 100%;
    height: 100%;
  }
}
</style>
