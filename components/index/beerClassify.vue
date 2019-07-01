<!-- 酒品分类 -->
<template>
  <div class="beer-classify-area">
    <div class="beer-classify-title-area">
      <!-- 左边标记 -->
      <div class="beer-classify-title-leftFlag">
        <i>1F</i>
        <span>白酒馆</span>
      </div>
      <!-- 右边省份 -->
      <div class="beer-classify-right-province">
        <nuxt-link v-for="(item,index) in province" :key="index" to="/">{{ item.name }}</nuxt-link>
        <nuxt-link to="/" class="specialA">白酒馆&nbsp;&nbsp;></nuxt-link>
      </div>
    </div>

    <!-- 主体内容 -->
    <div class="beer-classify-contentarea">
      <div class="beer-classify-leftswiper">
        <swiper-comp/>
      </div>

      
    </div>
  </div>
</template>

<script>
import SwiperComp from '@/components/index/swiperClassify.vue';
export default {
  props: {},
  data() {
    return {
      province: [
        {
          id: 0,
          name: '贵州'
        },{
          id: 1,
          name: '四川'
        },{
          id: 2,
          name: '山西'
        },{
          id: 3,
          name: '北京'
        },{
          id: 4,
          name: '江苏'
        },{
          id: 5,
          name: '山东'
        },{
          id: 6,
          name: '安徽'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    SwiperComp
  }
}
</script>

<style lang="scss">
.beer-classify-area {
  display: flex;
  flex-direction: column;
  .beer-classify-title-area {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 2px solid #c00;
    .beer-classify-title-leftFlag {
      display: flex;
      align-items: center;
      i {
        width: 29px;
        height: 29px;
        background: url(../../assets/img/images.png) no-repeat left center;
        background-position: 0 -95px;
        font-size: 18px;
        color: #ffffff;
        line-height: 29px;
        text-align: center;
        font-style: normal;
      }
      span{
        color: #333;
        font-size: 17px;
        margin-left: 10px;
        line-height: 29px;
      }
    }
    .beer-classify-right-province{
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        height: 100%;
        font-size: 12px;
        color: #999;
        padding: 0 7px;
        line-height: 40px;
      }
      a:hover{
        color: #c00;
      }
      .specialA{
        width: auto;
        height: 15px;
        padding: 4px 7px;
        background: #c00;
        color: #ffffff;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 3px;
      }
    }
  }
  .beer-classify-contentarea{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ececec;
    border-top: 2px solid #cc0000;
    .beer-classify-leftswiper{
      width: 210px;
      height: 485px;
    }
  }
}
</style>
