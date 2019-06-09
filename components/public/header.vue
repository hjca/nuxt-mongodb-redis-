<template>
  <div class="beer-header">
    <el-row>
      <el-col :span="8">
        <no-login/>
      </el-col>
      <el-col :span="16">2</el-col>
    </el-row>
  </div>
</template>

<script>
import NoLogin from './nologin.vue';
export default {
  components: {
    NoLogin
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
