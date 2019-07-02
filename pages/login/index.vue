<!-- 登录 -->
<template>
  <div class="beer-login-page">
    <a href="http://shop.jiuxian.com/brand-41/activity-3399.htm?source=23"></a>
    <login-comp/>
  </div>
</template>

<script>
import LoginComp from '@/components/login/loginArea.vue';
export default {
  layout: 'registered',
  data () {
    return {
    };
  },

  components: {
    LoginComp
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss">
.beer-login-page{
  width: 100%;
  height: 100%;
  position: relative;
  background: url(https://img10.jiuxian.com/bill/2019/0321/52e02a1c4948477da463dcf88915ad87.jpg) no-repeat center top;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    display: inline-block;
    width: 650px;
    height: 100%;
  }
}
</style>