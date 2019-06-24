<!-- 分来菜单 -->
<template>
  <div class="public-classify-menu">
    <div 
      v-for="(item, index) in menuClassify"
      :key="index"
      @mouseenter='enter(item.type)'
      :class="{'classify-enu-item': index != menuClassify.length - 1, 'classify-enu-item lastMenuItem': index == menuClassify.length - 1}">
      <h3>
        <i :class="item.icon"></i>
        <span>{{ item.classify }}</span>
      </h3>

      <div class="classify-menu-small">
        <nuxt-link 
          v-for="(val, idx) in item.child"
          :key="idx"
          :class="val.isSpecial ? 'specialBeer' : ''"
          :to="val.url">{{ val.item }}</nuxt-link>
      </div>
    </div>

    <!-- 鼠标移动时出现右边菜单 -->
    <div
      v-if="typeMenu" 
      @mouseleave="sout"
      class="publick-classify-detail-menu">
      <div class="public-detail-left">
        <div 
          v-for="(item,index) in classifyData.child"
          :key="index"
          class="public-detail-left-item">
          <div class="public-detail-left-title">{{ item.title }}</div>
          <div class="public-dateil-menu-list">
            <div class="public-detail-menu-area">
              <nuxt-link 
                v-for="(val,idx) in item.menuArr"
                :key="idx"
                :to="val.url">{{ val.name }}</nuxt-link>
            </div>
          </div>
        </div>

        <!-- 空白页面 -->
        <div class="public-detail-left-item specialKong">
          <div class="public-detail-left-title"/>
          <div class="public-dateil-menu-list">
            <div class="public-detail-menu-area" style="border: none;"/>>
          </div>
        </div>
      </div>

      <!-- 广告页 -->
      <div 
        v-if="classifyData.img"
        class="public-detail-right">
        <nuxt-link :to="classifyData.adverUrl">
          <img :src="classifyData.img" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      menuClassify: [
        {
          type: 'chooseBeer',
          classify: '一键选酒',
          icon: 'icon-love',
          classifyId: 0,
          child: [
            {
              id: 0,
              item: '整箱购',
              url: '/'
            },
            {
              id: 1,
              item: '家乡名酒',
              url: '/'
            },
            {
              id: 2,
              item: '老酒特卖',
              url: '/'
            },
            {
              id: 3,
              item: '地域名酒',
              url: '/'
            },
            {
              id: 4,
              item: '值得买',
              url: '/'
            },
            {
              id: 5,
              item: '实惠大t坛',
              url: '/'
            }
          ]
        },
        {
          classify: '白酒',
          icon: 'icon-whitwine',
          classifyId: 1,
          child: [
            {
              id: 0,
              item: '茅台',
              url: '/'
            },
            {
              id: 1,
              item: '五粮液',
              isSpecial: true,
              url: '/'
            },
            {
              id: 2,
              item: '酒鬼',
              isSpecial: true,
              url: '/'
            },
            {
              id: 3,
              item: '汾酒',
              url: '/'
            },
            {
              id: 4,
              item: '浓香型',
              url: '/'
            },
            {
              id: 5,
              item: '酱香型',
              isSpecial: true,
              url: '/'
            },
            {
              id: 6,
              item: '贵州',
              url: '/'
            },
            {
              id: 7,
              item: '四川',
              url: '/'
            }
          ]
        },
        {
          classify: '葡萄酒',
          icon: 'icon-grapewine',
          classifyId: 2,
          child: [
            {
              id: 0,
              item: '法国',
              url: '/'
            },
            {
              id: 1,
              item: '澳大利亚',
              url: '/'
            },
            {
              id: 2,
              item: '西班牙',
              url: '/'
            },
            {
              id: 3,
              item: '中国',
              url: '/'
            },
            {
              id: 4,
              item: '拉菲',
              isSpecial: true,
              url: '/'
            },
            {
              id: 5,
              item: '奔富',
              url: '/'
            },
            {
              id: 6,
              item: '黄尾袋鼠',
              url: '/'
            }
          ]
        },
        {
          classify: '洋酒',
          icon: 'icon-foreignwine',
          classifyId: 3,
          child: [
            {
              id: 0,
              item: '马爹利',
              isSpecial: true,
              url: '/'
            },
            {
              id: 1,
              item: '人头马',
              isSpecial: true,
              url: '/'
            },
            {
              id: 2,
              item: '尊尼获加',
              url: '/'
            },
            {
              id: 3,
              item: '轩诗尼',
              isSpecial: true,
              url: '/'
            },
            {
              id: 4,
              item: '绝对',
              isSpecial: true,
              url: '/'
            },
            {
              id: 5,
              item: '百龄坛',
              url: '/'
            }
          ]
        },
        {
          classify: '啤酒/黄酒/养生酒',
          icon: 'icon-beer',
          classifyId: 4,
          child: [
            {
              id: 0,
              item: '埃丝博爵',
              isSpecial: true,
              url: '/'
            },
            {
              id: 1,
              item: '青岛',
              isSpecial: true,
              url: '/'
            },
            {
              id: 2,
              item: '1664',
              isSpecial: true,
              url: '/'
            },
            {
              id: 3,
              item: '劲牌',
              url: '/'
            },
            {
              id: 4,
              item: '猎鹰',
              url: '/'
            },
            {
              id: 5,
              item: '狮虎争霸',
              url: '/'
            }
          ]
        },
        {
          classify: '食尚',
          icon: 'icon-foreignwine',
          classifyId: 4,
          child: [
            {
              id: 0,
              item: '酒具',
              isSpecial: true,
              url: '/'
            },
            {
              id: 1,
              item: '茶叶',
              url: '/'
            },
            {
              id: 2,
              item: '电子烟',
              isSpecial: true,
              url: '/'
            }
          ]
        }
      ],
      menuClassifyList: [
        {
          type: 'chooseBeer',
          img:
            'http://img10.jiuxian.com/brandlogo/2019/0614/563ed7d172134b83bc373c5277654554.png',
          adverUrl:
            'http://shop.jiuxian.com/brand-402/activity-3595.htm?area=2',
          child: [
            {
              id: 0,
              title: '特色会场',
              menuArr: [
                {
                  menuId: 0,
                  url: '/',
                  name: '整箱购'
                },
                {
                  id: 1,
                  url: '/',
                  name: '精品酒铺'
                },
                {
                  id: 2,
                  url: '/',
                  name: '家乡名酒'
                },
                {
                  id: 3,
                  url: '/',
                  name: '老酒特卖'
                },
                {
                  id: 4,
                  url: '/',
                  name: '实惠大坛'
                },
                {
                  id: 5,
                  url: '/',
                  name: '有礼有面'
                },
                {
                  id: 6,
                  url: '/',
                  name: '海外直采'
                }
              ]
            }
          ]
        }
      ],
      typeMenu: '' //确定鼠标滑过时出现的menu
    }
  },

  components: {},

  computed: {
    classifyData: function() {
      return this.menuClassifyList.filter(item => item.type == this.typeMenu)[0]
    }
  },

  mounted() {},

  methods: {
    // 鼠标滑过全部分类下的菜单时，出现右侧菜单
    enter(typename) {
      console.log(typename)
      this.typeMenu = typename ? typename : ''
    },
    // 鼠标移开菜单也
    sout() {
      this.typeMenu = ''
    }
  }
}
</script>
<style scoped lang="scss">
.public-classify-menu {
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 470px;
  left: 0;
  top: 34px;
  background: #ffffff;
  .classify-enu-item {
    height: 81px;
    border-left: 2px solid #ffffff;
    border-bottom: 1px solid #e4e4e4;
    padding: 0 10px;
    h3 {
      height: 32px;
      padding-top: 3px;
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
      }
      span {
        color: #333;
        font-size: 14px;
      }
    }
    .classify-menu-small {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      a {
        color: #666;
        font-size: 12px;
        line-height: 16px;
        margin: 2px 3px 2px 0;
        padding: 0 3px;
      }
      .specialBeer {
        color: #ffffff;
        background: #f90;
        border-radius: 3px;
      }
    }
  }
  .classify-enu-item:hover {
    border-left: 2px solid #c00;
    background: #e4e4e4;
  }
  .lastMenuItem {
    border-bottom: none;
    height: 60px;
  }

  .publick-classify-detail-menu {
    width: 615px;
    height: 470px;
    position: absolute;
    z-index: 10000;
    background: #ffffff;
    box-shadow: 0 0 4px 0 #ccc;
    top: 0;
    left: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .public-detail-left {
      flex: 1;
      height: 470px;
      background: #f1f1f1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .public-detail-left-item {
        height: auto;
        display: flex;
        justify-content: space-between;
        .public-detail-left-title {
          width: 60px;
          float: left;
          padding: 10px 10px 10px 20px;
          line-height: 22px;
          text-align: right;
          font-size: 12px;
          color: #333;
        }
        .public-dateil-menu-list {
          flex: 1;
          background: #ffffff;
          height: auto;
          .public-detail-menu-area {
            margin: 0 15px;
            height: auto;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 15px 0 10px;
            border-bottom: 1px dotted #ccc;
            a {
              padding: 0 8px;
              color: #666;
              font-size: 12px;
              background: url(http://misc.jiuxian.com/img/newIndexImg/menuLine.jpg)
                no-repeat right center;
              line-height: 22px;
            }
            a:hover {
              color: #c00;
            }
          }
        }
      }
      .specialKong {
        flex: 1;
      }
    }
    .public-detail-right {
      width: 215px;
      height: 100%;
      a,
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>