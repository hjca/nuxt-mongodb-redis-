<!-- 轮播图组件 -->
<template>
  <div class="home-swiper">
    <el-carousel 
      height="470px"
      @change="changeSwiper">
      <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
        <el-image
          :src="item.url"
          style="width: 100%; height: 470px"
          fit="cover">
        </el-image>
      </el-carousel-item>
    </el-carousel>

    
    <nav-bar-adver
      v-if="adver.length"
      :adver-img="adver"/>
  </div>
</template>

<script>
import NavBarAdver from '@/components/public/header/navBarAdver.vue'
export default {
  name: '',
  data() {
    return {
      swiperArr: [
        {
          id: 0,
          url:
            'http://img10.jiuxian.com/bill/2019/0619/69c4de8873514d40a9551fba01f5ff26.jpg',
          advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img07.jiuxian.com/bill/2019/0321/f15aa385f3874125bb4bdbef7537f353.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img09.jiuxian.com/bill/2018/1116/8a3fd6160dbe4d0fa38c4f31cd5ee2b8.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img06.jiuxian.com/bill/2018/1218/8ec83ea5c90943f99f0b4c54395374d5.png'
            }
          ]
        },
        {
          id: 1,
          url:
            'http://img07.jiuxian.com/bill/2019/0619/3f20d75df672476588d4275e622028eb.jpg',
            advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img09.jiuxian.com/bill/2018/1116/0b51ba7c23f34e61bee1a6701e974c94.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img09.jiuxian.com/bill/2018/1116/52707527f4ed49b6bc501fa1df5cf296.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img09.jiuxian.com/bill/2019/0506/2e7778a9f05040059ea00c1bd4a762e9.png'
            }
          ]
        },
        {
          id: 2,
          url:
            'http://img08.jiuxian.com/bill/2019/0619/801b34dc0d1f435db1342a9f6fca16ad.jpg',
          advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img06.jiuxian.com/bill/2018/1116/c524b467897d4299ad8bafa109875173.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img07.jiuxian.com/bill/2018/1116/b32135f3ce304a71a85111d5b2977e66.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img10.jiuxian.com/bill/2018/1116/f0364c31559143adb038c172ace4fbd8.png'
            }
          ]
        },
        {
          id: 3,
          url:
            'http://img08.jiuxian.com/bill/2019/0619/b71dcc6da3d640a1a89fdad60ed716e5.jpg',
          advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img08.jiuxian.com/bill/2018/1116/afc83aa54fc54fbe9090ea0ba8f517ef.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img10.jiuxian.com/bill/2018/1116/18228dd762ef440f89f98048485779c6.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img10.jiuxian.com/bill/2019/0305/2317997e77844434b587b715fb3a3948.png'
            }
          ]
        },
        {
          id: 4,
          url:
            'http://img06.jiuxian.com/bill/2019/0619/b13dfab32e3140ababa45cfbfe711bd7.jpg',
          advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img09.jiuxian.com/bill/2018/1116/9afd5071f4f948ec9b5d8db94d4ea30e.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img10.jiuxian.com/bill/2018/1218/fe0376d15b094e23b972d76f2cbfb4b7.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img09.jiuxian.com/bill/2018/1116/eac3f03a3d85480aa93b80c731f5ce8b.png'
            }
          ]
        },
        {
          id: 5,
          url:
            'http://img06.jiuxian.com/bill/2019/0619/13782f1af69442aba3c7499bcd764ba1.jpg',
          advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img06.jiuxian.com/bill/2019/0506/25f3698e128e4e1985e7e90902f47850.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img08.jiuxian.com/bill/2019/0506/a27eb83608ec461f81db161ed07aea33.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img10.jiuxian.com/bill/2019/0301/328b066c50a7447f93e035602655987e.jpg'
            }
          ]
        },
        {
          id: 6,
          url:
            'http://img06.jiuxian.com/bill/2019/0619/5c46b86533654572b8807c518e250de2.jpg',
          advarArr: [
            {
              id: 0,
              url: '/',
              img:
                'http://img06.jiuxian.com/bill/2018/1116/24197e05a3764c2db008c26abe0114d7.png'
            },
            {
              id: 1,
              url: '/',
              img:
                'http://img10.jiuxian.com/bill/2018/1116/346d814337904b869cf90a820d03cbe9.png'
            },
            {
              id: 2,
              url: '/',
              img:
                'http://img06.jiuxian.com/bill/2018/1116/39737c63796d46299f6d41a1b4499969.png'
            }
          ]
        }
      ],
      adver: []
    }
  },

  components: {
    NavBarAdver
  },

  computed: {},

  mounted() {},

  methods: {
    changeSwiper(key1) {
      this.adver = this.swiperArr[parseInt(key1)].advarArr;
    }
  }
}
</script>
<style scoped lang="scss">
.home-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>