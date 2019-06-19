<!-- 搜索区域 -->
<template>
  <div class="beer-header-search">
    <el-row :gutter="20" class="beer-search-control">
        <!-- logo -->
      <el-col :span="3">
        <img :src="logo">
      </el-col>

      <!-- 广告 -->
      <el-col :span="3">
        <img :src="adverImg">
      </el-col>

      <!-- 搜索区域 -->
      <el-col :span="11">
        <search-comp/>
      </el-col>

      <!-- 介绍 -->
      <el-col :span="7" class="beer-search-info">
        <nuxt-link to="/"></nuxt-link>
        <nuxt-link to="/"></nuxt-link>
        <nuxt-link to="/"></nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchComp from './searchComp'
export default {
  name:'',
  data () {
    return {
      logo: 'http://misc.jiuxian.com/img/newIndexImg/logo.png?20160405',    //广告
      adverImg: 'http://img06.jiuxian.com/bill/2019/0614/908ee50859ee4c6bb8aec9fadd634c38.gif',     //广告
    };
  },

  components: {
    SearchComp
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss">
.beer-header-search{
  width: 100%;
  height: 125px;
  .beer-search-control{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .beer-search-info{
    height: 64px;
    background: url(http://misc.jiuxian.com/img/newIndexImg/headerProPic1.png) no-repeat top left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    a{
      display: inline-block;
      height: 100%;
      width: 30%;
    }
  }
}
</style>