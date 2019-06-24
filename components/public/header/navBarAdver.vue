<!-- 菜单广告 -->
<template>
  <div class="beer-navbar-adver">
    <nuxt-link 
      v-for="(item,index) in adverImg"
      :key="index"
      :to="item.url">
      <img :src="item.img" alt="">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    adverImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.beer-navbar-adver {
  width: 190px;
  height: 470px;
  position: absolute;
  z-index: 100;
  top: 0;
  right: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  a{
    width: 100%;
    height: 156px;
    img{
        width: 100%;
        height: 100%;
    }
  }
  a:hover{
    background: #ffffff;
  }
}
</style>