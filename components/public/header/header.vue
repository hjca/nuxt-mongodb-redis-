<template>
  <div class="beer-header">
    <el-row>
      <el-col :span="8">
        <no-login/>
      </el-col>
      <el-col :span="16">
        <header-menu/>
      </el-col>
    </el-row>

    <!-- 广告 -->
    <nuxt-link class="default-header-advertising" to="/" />
  </div>
</template>

<script>
import NoLogin from './nologin.vue';
import HeaderMenu from './headerMenu.vue'
export default {
  components: {
    NoLogin,
    HeaderMenu
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss"
</style>
