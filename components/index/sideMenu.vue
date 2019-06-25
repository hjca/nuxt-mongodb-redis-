<!-- 侧边栏菜单 -->
<template>
  <div class="beer-side-menu-list">
    <!-- 我 -->
    <div class="beerUser default-side-menu">
      <div 
        @mouseenter='enterMine'
        class="icon-area">
        <i class="icon-mine"/>
      </div>
      <p>我</p>

      <!-- 弹层 -->
      <div v-if="mineType" @mouseleave="soutMine" class="beer-side-user-mark">
        <!-- 头部信息 -->
        <div class="beer-side-user-header">
          <div class="side-user-img">
            <img v-if="!login" :src="noLoginImg">
          </div>

          <!-- 未登录时展现的文本 -->
          <div v-if="!login" class="beer-user-nologin">
            您好！
            <nuxt-link to='/login' class="loginSpan">请登录</nuxt-link>
          </div>

          <!-- 登录时展现的文本 -->
          <div v-else-if="login" class="beer-user-login">
            <p class="username">
              <i>张三李四王二麻子</i>
              您好！
            </p>

            <div class="usercenter">
              <p class="usericon"></p>
              <nuxt-link to="/usercenter">酒虫会员</nuxt-link>
            </div>

            <nuxt-link to="/">立享CLUB会员 ></nuxt-link>
          </div>
        </div>

        <!-- 菜单信息 -->
        <div class="beer-side-user-menu">
          <div
            v-for="(item,index) in menuData"
            :key="index"
            class="menu-item">
            <i :class="item.icon"/>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 收藏 -->
    <div class="collection default-side-menu">
      <div @mouseenter='enterCollection' class="icon-area">
        <i class="icon-love"/>
      </div>
      <p>收藏</p>

      <!-- 弹层 -->
      <div v-if="collectionType" @mouseleave="soutCollection" :class="{'beer-side-user-mark': !login, 'beer-side-login-mark': login}">
        <!-- 头部信息 -->
        <div v-if="!login" class="beer-side-user-header">
          <div class="side-user-img">
            <img v-if="!login" :src="noLoginImg">
          </div>

          <!-- 未登录时展现的文本 -->
          <div class="beer-user-nologin">
            您好！
            <nuxt-link to='/login' class="loginSpan">请登录</nuxt-link>
          </div>

        </div>

        <!-- 登录时展现的文本 -->
        <div v-else-if="login" class="beer-user-login">
          <nuxt-link to="/">
            <i>已收藏商品</i>
            <i>(<i class="redNum">{{ collectionNum }}</i>)</i>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- 购物车 -->
    <div class="shopCart default-side-menu">
      <div class="icon-area">
        <i class="icon-shopcart"/>
      </div>
      <p>购</p>
      <p>物</p>
      <p>车</p>
    </div>

    <!-- 客服 -->
    <div class="shopCart default-side-menu">
      <div class="icon-area">
        <i class="icon-customer"/>
      </div>
      <p>客服</p>
    </div>

    <!-- code区域 -->
    <div class="beer-code-server">
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">hover 激活</el-button>
  </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      login: false, //是否登录，true：已登录   false：未登录
      noLoginImg: 'http://misc.jiuxian.com/img/newIndexImg/sbbgg.jpg', //未登录时的头像
      menuData: [
        {
          icon: 'icon-order',
          url: '',
          name: '我的订单'
        },
        {
          icon: 'icon-coupon',
          url: '',
          name: '我的优惠卷'
        },
        {
          icon: 'icon-logistics',
          url: '',
          name: '订单跟踪'
        },
        {
          icon: 'icon-member',
          url: '',
          name: '会员俱乐部'
        }
      ],
      mineType: '', //鼠标滑到“我”的时候出现弹层
      collectionNum: 0, //收藏数量
      collectionType: '' //鼠标滑到“收藏”的时候出现弹层
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 鼠标滑过“我”的时候
    enterMine() {
      this.mineType = 1
      this.collectionType = ''
    },
    soutMine() {
      this.mineType = ''
    },
    enterCollection() {
      this.collectionType = 1
      this.mineType = ''
    },
    soutCollection() {
      this.collectionType = ''
    }
  }
}
</script>
<style scoped lang="scss">
.beer-side-menu-list {
  width: 35px;
  height: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 0 4px 0 #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .default-side-menu {
    width: 100%;
    height: auto;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    .icon-area {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #c00;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2px;
    }
    p {
      padding: 2px 0 0;
      font-size: 12px;
      line-height: 16px;
      color: #333333;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  .default-side-menu:hover {
    background: #c00;
    .icon-area {
      background: #ffffff;
      i:before {
        color: #c00;
      }
    }
    p {
      color: #ffffff;
    }
  }
  .beer-side-user-mark {
    width: 270px;
    height: 283px;
    background: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    right: 35px;
    z-index: 1000000;
    border: 1px solid #ddd;
    border-right: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .beer-side-user-header {
    height: 80px;
    padding: 18px 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    .side-user-img {
      width: 78px;
      height: 78px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #f3f3f3;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .beer-user-nologin {
      height: auto;
      width: auto;
      padding: 0 0 0 12px;
      line-height: 24px;
      color: #666;
      font-size: 12px;
      .loginSpan {
        color: #c00;
      }
    }
    .beer-user-login {
      width: auto;
      height: auto;
      line-height: 24px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      padding: 0 0 0 12px;
      .usercenter {
        height: 24px;
      }
      .username,
      .usercenter {
        width: 104px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #666;
        i,
        a {
          color: #c00;
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-style: normal;
        }
        a {
          color: #666;
        }
        a:hover {
          color: #c00;
        }
        .usericon {
          width: 22px;
          height: 22px;
          margin-right: 5px;
          background: url(http://misc.jiuxian.com/img/newIndexImg/memberLevel-24.png)
            no-repeat left center;
        }
      }
      a {
        color: #c00;
      }
    }
  }
  .beer-side-user-menu {
    width: 100%;
    flex: 1;
    background: #f9f9f9;
    border-top: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .menu-item {
      width: 50%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        line-height: 18px;
        color: #666;
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }
  .icon-order:before,
  .icon-coupon:before,
  .icon-logistics:before,
  .icon-member:before {
    font-size: 26px;
  }
  .collection {
    .beer-side-user-mark{
      height: auto;
    }
    .beer-side-login-mark {
      height: 43px;
      width: 88px;
      padding: 7px 0;
      a {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #666666;
        line-height: 24px;
        i {
          font-style: normal;
        }
        .redNum {
          color: #c00;
        }
      }
    }
  }
  .beer-code-server {
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 40px;
    overflow: hidden;
  }
}
</style>