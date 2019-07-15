<!-- 已登录 -->
<template>
  <div class="beer-login-yes">
    <span class="username">hi，吴辉</span>
    <span class="beer-user-loginout">退出</span>
    <span class="beer-user-message">
      消息
      <i>5</i>
    </span>
    <span class="beer-user-money">
      金币
      <i>50</i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
.beer-login-yes{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999999;
  padding-left: 110px;
  .beer-user-loginout,
  .beer-user-message,
  .beer-user-money{
    cursor: pointer;
    margin-left: 10px;
    i{
      color: #c00;
      padding-left: 2px;
      font-weight: bold;
      font-style: normal;
    }
  }
  .beer-user-loginout:hover,
  .beer-user-message:hover,
  .beer-user-money:hover{
    color: #c00;
  }
}
</style>
