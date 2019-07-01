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

        <!-- table切换 -->
        <menu-beer-comp/>

        <!-- 广告 -->
        <div class="home-table-adver">
          <nuxt-link 
            v-for="(item,index) in adverImg"
            :key="index"
            to="/">
            <img :src="item.img" alt="">
          </nuxt-link>
        </div>

        <!-- 优惠推荐 -->
        <div class="home-table-recommend">
          <menu-recoun-comp/>
        </div>

      </el-col>
      <el-col :span="3" class="home-table-menu-right-adver">
        <img :src="rightImg">
      </el-col>
    </el-row>

    <!-- 酒瓶分类 -->
    <el-row class="home-beer-classify-item">
      <el-col :span="3">1</el-col>
      <el-col :span="18">
        <beer-home-classify/>
      </el-col>
      <el-col :span="3">3</el-col>
    </el-row>

    <!-- 侧边栏 -->
    <side-menu-list/>
  </div>
</template>

<script>
import SwiperComp from '@/components/index/swiperComp.vue';
import SideMenuList from '@/components/index/sideMenu.vue';
import MenuBeerComp from '@/components/index/tableMenu.vue';
import MenuRecounComp from '@/components/index/recommend.vue';
import BeerHomeClassify from '@/components/index/beerClassify.vue';
export default {
  components: {
    SwiperComp,
    SideMenuList,
    MenuBeerComp,
    MenuRecounComp,
    BeerHomeClassify
  },
  data() {
    return {
      leftImg: 'http://img09.jiuxian.com/bill/2019/0625/2eb9d3e967ba43d99247534054ca1766.png',
      rightImg: 'http://img07.jiuxian.com/bill/2019/0625/675792ccc09a45db9a5094d2e3a97bb1.png',
      adverImg:[
        {
          id: 0,
          img: 'http://img08.jiuxian.com/bill/2019/0325/292cfb34eabd4245a99022454342aa94.png'
        },
        {
          id: 1,
          img: 'http://img07.jiuxian.com/bill/2019/0622/4ad0c47eef32419db642a816fde0effe.png'
        },
        {
          id: 2,
          img: 'http://img08.jiuxian.com/bill/2019/0628/99c0be3326fd47e78102011734bb215e.png'
        }
      ]
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
    height: 920px;
    overflow: hidden;
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
    .home-table-adver{
      width: 100%;
      height: 110px;
      margin-top: 20px;
      overflow: hidden;
      background: #ffffff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        width: auto;
        height: auto;
        img{
          width: 290px;
          height: 126px;
        }
      }
    }
    .home-table-recommend{
      width: 100%;
      height: 257px;
      margin-top: 20px;
    }
  }
  .home-beer-classify-item{
    height: auto;
    margin-top: 20px;
  }
}
</style>
