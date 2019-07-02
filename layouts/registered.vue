<!-- 主页面的默认样式 -->
<template>
  <el-container class="page-registered-default">
     <!-- 头部信息 -->
    <el-header>
      <registered-header/>
    </el-header>

    <!-- 正文内容 -->
    <el-main>
      <nuxt />
    </el-main>

    <!-- 底部菜单 -->
    <el-footer>
      <p>©  酒仙网  2011 jiuxian.com All  Rights Reserved  京ICP证110141号  京公网安备1101050188221</p>
      <span>购买前请确认达到法定饮酒年龄！酒仙网不销售任何含酒精产品给18岁以下人士！</span>
    </el-footer>
  </el-container>
</template>

<script>
import RegisteredHeader from '@/components/registered/header.vue';
export default {
  name:'',
  data () {
    return {
    };
  },

  components: {
    RegisteredHeader
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss">
.page-registered-default{
  .el-header{
    padding: 0;
    box-shadow: 1px 2px 6px #e1e1e1;
  }
  .el-main{
    margin-top: 4px;
    height: 600px;
    background: url(https://login.jiuxian.com/img/reg/bg.jpg) repeat-x scroll left top;
  }
  .el-footer{
    height: 220px!important;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      color: #333;
      line-height: 30px;
      font-size: 12px;
    }
    span{
      line-height: 30px;
      font-size: 12px;
      color: #ff0000;
    }
  }
}
</style>