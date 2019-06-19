<!-- 轮播图组件 -->
<template>
  <div class="home-swiper">
    <el-carousel 
      height="470px">
      <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
        <el-image
          :src="item.url"
          style="width: 100%; height: 470px"
          fit="cover">
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
      swiperArr: [{
        id: 0,
        url: 'http://img10.jiuxian.com/bill/2019/0619/69c4de8873514d40a9551fba01f5ff26.jpg'
      },{
        id: 1,
        url: 'http://img07.jiuxian.com/bill/2019/0619/3f20d75df672476588d4275e622028eb.jpg'
      },{
        id: 2,
        url: 'http://img08.jiuxian.com/bill/2019/0619/801b34dc0d1f435db1342a9f6fca16ad.jpg'
      },{
        id: 3,
        url: 'http://img08.jiuxian.com/bill/2019/0619/b71dcc6da3d640a1a89fdad60ed716e5.jpg'
      },{
        id: 4,
        url: 'http://img06.jiuxian.com/bill/2019/0619/b13dfab32e3140ababa45cfbfe711bd7.jpg'
      },{
        id: 5,
        url: 'http://img06.jiuxian.com/bill/2019/0619/13782f1af69442aba3c7499bcd764ba1.jpg'
      },{
        id: 6,
        url: 'http://img06.jiuxian.com/bill/2019/0619/5c46b86533654572b8807c518e250de2.jpg'
      }]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped lang="scss">
.home-swiper{
  width: 100%;
  height: 100%;
}
</style>