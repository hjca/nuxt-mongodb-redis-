<!-- 公司简介 -->
<template>
  <div class="footer-company">
    <el-row>
      <el-col :span="3" style="color:#f9f9f9;">1</el-col>
      <el-col :span="18" class="footer-company-contain">
        <div class="footer-company-area">
          <div class="footer-company-url">
            <nuxt-link 
              v-for="(item,index) in companyUrl"
              :key="index"
              :class="{'noline': index == companyUrl.length - 1}"
              :to="item.url">{{ item.name }}</nuxt-link>
          </div>

          <!-- 备案 -->
          <p class="company-remork">北京酒仙网络科技有限公司  ©  酒仙网   2011  jiuxian.com  All   Rights Reserved   京ICP备17043395号   京公网安备1101050188221</p>
        
          <!-- 链接 -->
          <div class="footer-company-url">
            <nuxt-link 
              v-for="(item,index) in companyUrl2"
              :key="index"
              :class="{'noline': index == companyUrl2.length - 1}"
              :to="item.url">{{ item.name }}</nuxt-link>
          </div>

          <!-- 地址 -->
          <p class="company-remork defaultAddress">统一社会信用代码  91110302306646672B   食品流通许可证编号  JY11131010328793</p>
          <p class="company-remork defaultAddress">地址：北京市北京经济技术开发区经海五路58号院8幢4层</p>

          <!-- 信息许可证 -->
          <div class="company-prove">
            <nuxt-link to="https://ss.knet.cn/verifyseal.dll?sn=2011040600100007749&a=1&pa=0.9425381854380267">
              <img src="http://rr.knet.cn/static/images/logo/cnnic.png">
            </nuxt-link>

            <nuxt-link to="http://img01.jiuxian.com/img1/nsy/icp01.jpg">
              <img src="http://misc.jiuxian.com/img/newIndexImg/copyBot03.jpg">
            </nuxt-link>
          </div>

          <!-- 注意 -->
          <p class="footer-notice">购买前请确认达到法定饮酒年龄！酒仙网不销售任何含酒精产品给18岁以下人士！</p>
        </div>

        <div class="company-code">
          <div class="phoneInter">
            <img src="http://misc.jiuxian.com/img/newIndexImg/jxPho-code.jpg" alt="">
            <span>手机酒仙网</span>
          </div>

          <div class="wxInter">
            <img src="http://misc.jiuxian.com/img/newIndexImg/jx-wxgzh.png" alt="">
            <span>微信公众号</span>
          </div>
        </div>
      </el-col>
      <el-col :span="3" style="color:#f9f9f9;">2</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      companyUrl: [
        {
          url: 'http://help.jiuxian.com/view-0-105.htm',
          name: '公司简介'
        },
        {
          url: 'http://help.jiuxian.com/view-0-106.htm',
          name: '管理团队'
        },
        {
          url: 'http://help.jiuxian.com/view-0-109.htm',
          name: '媒体报道'
        },
        {
          url: 'http://help.jiuxian.com/view-0-110.htm',
          name: '联系我们'
        },
        {
          url: 'http://www.jiuxian.com/links.htm',
          name: '友情链接'
        },
        {
          url: 'http://www.jiuxian.com/sitemap.htm',
          name: '网站地图'
        },
        {
          url: 'http://www.jiuxian.com/allbrands.htm',
          name: '品牌大全'
        }
      ],
      companyUrl2: [
        {
          url: 'http://www.jiuxian.com',
          name: '酒仙网白酒'
        },
        {
          url: 'http://wine.jiuxian.com/',
          name: '酒仙网葡萄酒'
        },
        {
          url: 'http://help.jiuxian.com/view-6-298.htm',
          name: '开放平台招商'
        },
        {
          url: 'http://tuan.jiuxian.com/',
          name: '酒仙网团购'
        },
        {
          url: 'http://www.jiuxian.com/links.htm',
          name: '更多'
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.footer-company-contain {
  display: flex;
  justify-content: space-between;
  .footer-company-area {
    padding: 20px 0 40px;
    .footer-company-url {
      display: flex;
      align-items: center;
      a {
        padding: 0 8px;
        color: #666;
        font-size: 12px;
        border-right: 1px solid#666;
        line-height: 20px;
      }
      .noline {
        border: none;
      }
      a:hover {
        color: #c00;
      }
    }
    .company-remork {
      color: #666;
      font-size: 12px;
      padding: 0 8px;
      margin-bottom: 17px;
      line-height: 20px;
    }
    .defaultAddress {
      margin: 0;
    }
    .company-prove {
      display: flex;
      align-items: center;
      padding: 7px 0 9px 0;
      a {
        margin-right: 6px;
      }
    }
    .footer-notice {
      font-size: 12px;
      color: #c00;
      line-height: 20px;
    }
  }
  .company-code{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .phoneInter,.wxInter{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 40px;
      img{
        width: 80px;
        height: 80px;
      }
      span{
        line-height: 24px;
        color: #666;
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
}
</style>