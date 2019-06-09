<template>
  <el-container class="layout-default">
    <el-header>
      <beer-header/>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>2</el-footer>
  </el-container>
</template>

<script>
  import BeerHeader from '@/components/public/header.vue'
  export default {
    components: {
      BeerHeader
    }
  }
</script>