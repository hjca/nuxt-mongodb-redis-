<template>
  <el-container class="layout-default">
    <!-- 公共头部 -->
    <el-header>
      <beer-header/>
    </el-header>

    <!-- 主体内容 -->
    <el-main>
      <nuxt />
    </el-main>

    <!-- 底部菜单 -->
    <el-footer>
       <footer-contact/>
       <company-info/>
    </el-footer>
  </el-container>
</template>

<script>
  import BeerHeader from '@/components/public/header/header.vue'
  import FooterContact from '@/components/public/footer/contact.vue'
  import CompanyInfo from '@/components/public/footer/companyInfo.vue'
  export default {
    components: {
      BeerHeader,
      FooterContact,
      CompanyInfo
    }
  }
</script>

<style lang="scss">
  .el-header{
    height: auto!important;
  }
  .el-main,.el-footer{
    padding: 0;
    background: #f9f9f9;
  }
</style>