<!-- 首页中菜单的table切换 -->
<template>
  <div class="beer-home-table-menu">
    <!-- 左边的table切换 -->
    <el-tabs type="border-card" v-model="menuActive" stretch class="beer-home-left-area" @tab-click="selectMenu">
      <el-tab-pane 
        v-for="(item,index) in tabMenuList"
        :key="index"
        :label="item.title"
        :name="item.title">
        <div class="beer-shop-area">
          <div
            v-for="(val,idx) in item.child" 
            :key="idx"
            class="beer-shop-item-area">
            <shop-item-comp
              :shop-item-data="val"/>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 右边的table切换 -->
    <div class="beer-home-right-area">
      <!-- 公告信息展示内容 -->
      <el-tabs type="border-card" stretch class="beer-home-right-notice">
        <el-tab-pane label="公告信息">公告信息</el-tab-pane>
        <el-tab-pane label="促销信息">促销信息</el-tab-pane>
      </el-tabs>

      <!-- 推荐 -->
      <div class="beer-home-right-swiper">
        <swiper-comp
          height-num="157px"
          :swiper-data="recommend"/>
      </div>

      <!-- 尊享 -->
      <div class="beer-home-right-swiper">
        <swiper-comp
          height-num="157px"
          :swiper-data="join"/>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperComp from '@/components/public/swiper/swiper.vue';
import { menuList } from '@/assets/util/util.js';
import ShopItemComp from '@/components/public/shopItem/shopItem.vue';
export default {
  name: '',
  data() {
    return {
      // 推荐
      recommend: [
        {
          id: 0,
          url: '/',
          img:'http://img09.jiuxian.com/bill/2019/0617/76902c2d2def4c958c06e500bc67fe71.jpg'
        },
        {
          id: 1,
          url: '/',
          img:'http://img07.jiuxian.com/bill/2019/0605/650811f877fd499189ae1b08474e16d7.jpg'
        },
        {
          id: 2,
          url: '/',
          img:'http://img09.jiuxian.com/bill/2019/0605/126945d85a3b446f9f733b7f3a8479c3.jpg'
        }
      ],
      // 尊享
      join: [
        {
          id: 0,
          url: '/',
          img:'http://img09.jiuxian.com/bill/2019/0617/632cac4f9ff64af6a4265f01590eba08.jpg'
        },
        {
          id: 1,
          url: '/',
          img:'http://img09.jiuxian.com/bill/2019/0617/cc4c780ecc424cb891bd698755e28689.jpg'
        },
        {
          id: 2,
          url: '/',
          img:'http://img10.jiuxian.com/bill/2019/0322/93a21b1133bf4a1c9018ae88b99cb12c.png'
        }
      ],
      // 菜单
      tabMenuList: menuList,
      menuActive: ""
    }
  },

  components: {
    SwiperComp,
    ShopItemComp
  },

  computed: {},

  mounted() {
    this.menuActive = this.tabMenuList[0].title;
  },

  methods: {
    // 选择的菜单
    selectMenu(tab) {
      console.log(tab)
    }
  }
}
</script>
<style lang="scss">
.beer-home-table-menu {
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .beer-home-left-area{
    width: 920px;
    height: 100%;
    border: 1px solid #ececec;
    box-shadow: none;
    margin-right: 15px;
    border-top: none;
  }
  .beer-home-right-area{
    width: 270px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .beer-home-right-notice{
      width: 100%;
      height: 140px;
      border: 1px solid #ececec;
      box-shadow: none;
      border-top: none;
    }
    .beer-home-right-swiper{
      width: 100%;
      height: 157px;
      border: 1px solid #ececec;
    }
  }
  .beer-shop-area{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .beer-shop-item-area{
      width: 20%;
      height: 196px;
      margin-top: 20px;
    }
  }
}
</style>