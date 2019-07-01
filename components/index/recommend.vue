<!-- 优惠推荐 -->
<template>
  <div class="beer-home-recommend">
    <!-- 标题 -->
    <div class="beer-recommend-title">
      <div class="beer-recommend-title-left">
        <div class="icon-img-area" />
        <span>优惠推荐</span>
      </div>
      <div class="beer-recommend-title-right">
        <span
          v-for="(item,index) in recommendData"
          :key="index"
          :class="spanIt == index ? 'spanActive' : ''"
          @click="selectItor(index)"
        />
      </div>
    </div>

    <!-- 主题内容 -->
    <div class="beer-home-recommend-area">
      <el-carousel 
        height="217px" 
        :autoplay="swiperOption.autoPlay" 
        indicator-position="none" 
        :loop="swiperOption.isLoop" 
        :initial-index="swiperOption.startIndex"
        @change="changeSwiper">
        <el-carousel-item v-for="(item,index) in recommendData" :key="index">
          <div class="beer-swiper-item">
            <div v-for="(val,idx) in item.child" :key="idx" class="beer-swiper-item-area">
              <shop-item :shop-item-data="val" />
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { recommendList } from '@/assets/util/util.js'
import ShopItem from '@/components/public/shopItem/shopItem.vue'
export default {
  name: '',
  data() {
    return {
      recommendData: recommendList,
      spanIt: 0,
      swiperOption: {
        autoPlay: false,
        isLoop: false,
        startIndex: 0
      }
    }
  },

  components: {
    ShopItem
  },

  computed: {},

  mounted() {},

  methods: {
    //点击指示点
    selectItor(idx) {
      this.spanIt = idx;
      this.swiperOption.startIndex = idx;
      // this.$set(this.swiperOption,'startIndex',idx);
    },
    changeSwiper(idx) {
      this.spanIt = idx
    }
  }
}
</script>
<style lang="scss">
.beer-home-recommend {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .beer-recommend-title {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .beer-recommend-title-left {
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-img-area {
        width: 20px;
        height: 20px;
        background: url(../../assets/img/images.png) no-repeat top left;
      }
      span {
        color: #333;
        font-size: 17px;
        margin-left: 10px;
        padding-bottom: 3px;
      }
    }
    .beer-recommend-title-right {
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: inline-block;
        width: 9px;
        height: 9px;
        background: #cccccc;
        margin-left: 14px;
        cursor: pointer;
      }
      .spanActive {
        background: #c00;
      }
    }
  }
  .beer-home-recommend-area {
    width: 100%;
    flex: 1;
    background: #ffffff;
    border: 1px solid #f5f5f5;
    .beer-swiper-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2px;
      .beer-swiper-item-area {
        height: 100%;
        width: 16.67%;
      }
    }
  }
}
</style>