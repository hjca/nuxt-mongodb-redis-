<!-- 导航菜单 -->
<template>
  <div class="beer-header-navbar">
    <div class="allClassfiy">
      全部分类
      <classify-menu/>
    </div>
    <nuxt-link 
      v-for="(item,index) in navBarMenu" 
      :key="index"
      :to="item.url" 
      :class="{'lastImg': item.img,'defaultLink': index != 0 }">
        <span v-if="!item.img">{{ item.name }}</span>
        <img v-else :src="item.img">

        <div class="flagArea" v-show="item.hot">
          <flag-comp/>
        </div>
      </nuxt-link>
  </div>
</template>

<script>
import flagComp from '@/components/public/flag/flag';
import ClassifyMenu from '@/components/public/header/classifyMenu.vue';
export default {
  components: {
    flagComp,
    ClassifyMenu
  },
  data () {
    return {
      navBarMenu: [{
        id: 1,
        url: '/',
        name: '首页',
        hot: false
      },{
        id: 2,
        url: '/volume',
        name: '领卷中心',
        hot: false
      },{
        id: 3,
        url: '/drunkard',
        name: '酒鬼酒专场',
        hot: true
      },{
        id: 4,
        url: '/buy',
        name: '值得买',
        hot: true
      },{
        id: 5,
        url: '/wine',
        name: '葡萄酒馆',
        hot: false
      },{
        id: 6,
        url: '/selfchoose',
        name: '自营甄选',
        hot: true
      },{
        id: 7,
        url: '/foreign',
        name: '洋酒馆',
        hot: false
      },{
        id: 8,
        url: '/newprod',
        name: '新品',
        hot: false
      },{
        id: 9,
        url: '/club',
        name: 'CLUB'
      },{
        id: 10,
        url: '/activity',
        img: 'http://img08.jiuxian.com/bill/2019/0617/0f4ab18c290d44fd9f6ea6ae203a3c3e.gif'
      }]
    };
  },
  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.beer-header-navbar{
  height: 100%;
  display: flex;
  align-items: center;
  a{
    height: 100%;
    color: #ffffff;
    font-size: 14px;
    padding: 0 22px;
    text-align: center;
    line-height: 34px;
  }
  .allClassfiy{
    height: 100%;
    color: #ffffff;
    font-size: 14px;
    padding: 0 22px;
    text-align: center;
    line-height: 34px;
    width: 146px;
    background: #ce171f;
    position: relative;
  }
  .lastImg{
    padding: 0;
    margin-left: 60px;
  }
  .defaultLink{
    position: relative;
    .flagArea{
      position: absolute;
      z-index: 100;
      right: 0;
      top: 0;
    }
  }
  .defaultLink:hover{
    background: #b40c10;
  }
  .nuxt-link-exact-active{
    background: #b40c10;
  }
}
</style>