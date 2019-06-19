<!-- 联系方式 -->
<template>
  <div class="footer-contact">
    <el-row>
      <el-col :span="3" style="color: #333;">1</el-col>
      <el-col :span="18">
        <!-- 联系电话 -->
        <div class="footer-contact-server">
          <!-- 热线电话 -->
          <div class="footer-contact-serverphone">
            <div class="imgarea"/>
            <span class="tel">400-617-9999</span>
            <span class="customerService" v-html="serverLine"></span>
          </div>

          <!-- 优惠促销 -->
          <div class="footer-prefer-search">
            <label>优惠促销早知道</label>
            <div class="prefer-email">
              <input type="text" placeholder="请输入您的邮箱地址" v-model="preferVal">
              <div class="iconarea"></div>
            </div>
          </div>
        </div>

        <!-- 问题列表区域 -->
        <div class="footer-question-menu">
          <!-- 新手入门 -->
          <div class="newperson defaultMenu">
            <h3>
              <i></i>
              <span>新手入门</span>
            </h3>
            <nuxt-link to="/">购物保障</nuxt-link>
            <nuxt-link to="/">发票说明</nuxt-link>
            <nuxt-link to="/">服务协议</nuxt-link>
          </div>

          <!-- 常见问题 -->
          <div class="questin defaultMenu">
            <h3>
              <i></i>
              <span>常见问题</span>
            </h3>
            <nuxt-link to="/">红包使用</nuxt-link>
            <nuxt-link to="/">返现使用</nuxt-link>
            <nuxt-link to="/">兑换码</nuxt-link>
          </div>

          <!-- 配送说明 -->
          <div class="distribution defaultMenu">
            <h3>
              <i></i>
              <span>配送说明</span>
            </h3>
            <nuxt-link to="/">配送时间</nuxt-link>
            <nuxt-link to="/">配送费用</nuxt-link>
            <nuxt-link to="/">配送范围</nuxt-link>
          </div>

          <!-- 支付方式 -->
          <div class="payStyle defaultMenu">
            <h3>
              <i></i>
              <span>支付方式</span>
            </h3>
            <nuxt-link to="/">货到付款</nuxt-link>
            <nuxt-link to="/">在线支付</nuxt-link>
            <nuxt-link to="/">线下支付</nuxt-link>
          </div>

          <!-- 售后服务 -->
          <div class="afterSale defaultMenu">
            <h3>
              <i></i>
              <span>售后服务</span>
            </h3>
            <nuxt-link to="/">品质保证</nuxt-link>
            <nuxt-link to="/">退换货政策</nuxt-link>
            <nuxt-link to="/">退换货流程</nuxt-link>
          </div>

          <!-- 特色服务 -->
          <div class="characteristic defaultMenu">
            <h3>
              <i></i>
              <span>特色服务</span>
            </h3>
            <nuxt-link to="/">会员俱乐部</nuxt-link>
            <nuxt-link to="/">企业客户</nuxt-link>
            <nuxt-link to="/">酒仙社区</nuxt-link>
          </div>

          <!-- 微博、微信 -->
          <div class="wBwX defaultMenu">
            <nuxt-link to="/">
              <i></i>
              <span>酒仙桥新浪微博</span>
            </nuxt-link>
            <nuxt-link to="/">
              <i class="wx"></i>
              <span>酒仙微信</span>
            </nuxt-link>
          </div>

          <div class="wBwX defaultMenu" style="width: auto;">
            <img src="http://misc.jiuxian.com/img/newIndexImg/weixin-code.jpg">
          </div>
        </div>
      </el-col>
      <el-col :span="3" style="color: #333;">1</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
      serverLine: '客服热线&nbsp;&nbsp;9:00-23:00&nbsp;&nbsp;&nbsp;&nbsp;贴心服务',
      preferVal: ''       //优惠促销的输入值
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss">
.footer-contact{
  width: 100%;
  height: 290px;
  background: #333333;
  .el-row,.el-col{
    height: 100%;
    .footer-contact-server{
      height: 85px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #494949;
      .footer-contact-serverphone{
        display: flex;
        align-items: center;
        .imgarea{
          width: 40px;
          height: 42px;
          margin-right: 18px;
          background: url(../../../assets/img/icon.png) no-repeat;
          background-position: -144px -21px; 
        }
        .tel{
          font-size: 24px;
          margin-right: 25px;
          color: #c00;
          font-weight: bold;
        }
        .customerService{
          font-size: 14px;
          color: #ffffff;
        }
      }
      .footer-prefer-search{
        display: flex;
        align-items: center;
        label{
          font-size: 14px;
          color: #ffffff; 
          padding-right: 10px;
        }
        .prefer-email{
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          border: 1px solid #494949;
          padding-right: 10px;
          input{
            flex: 1;
            height: 32px;
            outline: medium;
            background: transparent;
            color: #ffffff;
            font-size: 14px;
            padding-left: 5px;
            border: none;
          }
          .iconarea{
            width: 22px;
            height: 18px;
            background: url(../../../assets/img/icon.png) no-repeat;
            background-position: -134px 0;
          }
        }
      }
    }
    .footer-question-menu{
      height: 204px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .defaultMenu{
        width: 158px;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        h3{
          height: 16px;
          padding: 5px 0;
          display: flex;
          align-items: center;
          span{
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
          }
        }
        a{
          padding-left: 35px;
          color: #ccc;
          font-size: 12px;
          line-height: 26px;
        }
      }
      .newperson,.questin,.distribution,.payStyle,.afterSale,.characteristic{
        i{
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-right: 9px;
          background: url(../../../assets/img/icon.png) no-repeat;
        }
      }
      .newperson{
        i{
          background-position: 0 -131px; 
        }
      }
      .questin{
        i{
          background-position: -30px -131px; 
        }
      }
      .distribution{
        i{
          background-position: -60px -131px; 
        }
      }
      .payStyle{
        i{
          background-position: -90px -131px;  
        }
      }
      .afterSale{
        i{
          background-position: -120px -131px;  
        }  
      }
      .characteristic{
        i{
          background-position: -150px -131px;  
        } 
      }
      .wBwX{
        a{
          padding: 0;
          display: flex;
          align-items: center;
          padding: 5px 0 13px;
          i{
            width: 28px;
            height: 28px;
            margin-right: 9px;
            background: url(../../../assets/img/icon.png) no-repeat;
            background-position: -140px -74px;
          }
          span{
            font-size: 14px;
            color: #ffffff;
            font-weight: bold;
          }
          .wx{
            background-position: -102px -74px; 
          }
        }
        img{
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>