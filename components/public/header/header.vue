<template>
  <div class="beer-header">
    <el-row>
      <el-col :span="8">
        <no-login v-if="!isLogin"/>
        <yes-login 
          v-else-if="isLogin"
          :user-info="user"/>
      </el-col>
      <el-col :span="16">
        <header-menu/>
      </el-col>
    </el-row>

    <!-- 广告 -->
    <nuxt-link class="default-header-advertising" to="/" v-show="$store.state.home.advertis"/>

    <!-- 搜索区域 -->
    <el-row class="search-data">
      <el-col :span="3" style="color: #fff;">1</el-col>
      <el-col :span="18">
        <search-area/>
      </el-col>
      <el-col :span="3" style="color: #fff;">2</el-col>
    </el-row>

    <!-- 导航菜单 -->
    <el-row class="beer-navbar">
      <el-col :span="3" style="color: #900;">1</el-col>
      <el-col :span="18">
        <nav-bar-menu/>
      </el-col>
      <el-col :span="3" style="color: #900;">2</el-col>
    </el-row>
  </div>
</template>

<script>
import NoLogin from './nologin.vue';
import YesLogin from './yesLogin';
import HeaderMenu from './headerMenu.vue'
import SearchArea from './searcharea.vue'
import NavBarMenu from './navBarMenu'
export default {
  components: {
    NoLogin,
    HeaderMenu,
    SearchArea,
    NavBarMenu,
    YesLogin
  },
  data() {
    return {
      isLogin: false,
      user: {}
    }
  },
  async mounted () {
    const {status,data} = await this.$axios.get('/users/getUser')
    if(status == 200) {
      console.log(data)
      this.user = data
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss"
</style>
