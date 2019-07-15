<template>
  <div class="beer-login-no">
    <span class="beer-title-text">欢迎来酒仙网！</span>
    <nuxt-link to="/login">请登录</nuxt-link>
    <nuxt-link to="/login/registered">免费注册</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss">
.beer-login-no{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999999;
  padding-left: 110px;
  .beer-title-text{
    margin-right: 6px;
    display: flex;
  }
  a{
    margin-right: 6px;
    color: #999999;
    cursor: pointer;
  }
  a:hover{
    color: #c00;
  }
}
</style>
