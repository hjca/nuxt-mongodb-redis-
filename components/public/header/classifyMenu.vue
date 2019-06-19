<!-- 分来菜单 -->
<template>
  <div class="public-classify-menu">
    <div class="classify-enu-item">
      <h3>
        <i class="icon-love"></i>
        <span>一键选酒</span>
      </h3>

      <div class="classify-menu-small">
        <nuxt-link to="/">整箱购</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped lang="scss">
.public-classify-menu{
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 470px;
  left: 0;
  top: 34px;
  background: #ffffff;
  .classify-enu-item{
    height: 81px;
    border-left: 2px solid #ffffff;
    border-bottom: 1px solid #e4e4e4;
    padding: 0 10px;
    h3{
      height: 35px;
      padding-top: 3px;
      display: flex;
      align-items: center;
      i{
        margin-right: 10px;
      }
      span{
        color: #333;
        font-size: 14px;
      }
    }
    .classify-menu-small{
      display: flex;
      align-items: center;
      flex-direction: column;
      a{
        color: #666;
        font-size: 12px;
      }
    }
  }
  .classify-enu-item:hover{
    border-left: 2px solid #c00;
    background: #e4e4e4;
  }
}
</style>