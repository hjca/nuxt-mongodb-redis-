<!-- 注册 -->
<template>
  <div class="registered-input-info">
    <registered-area/>
  </div>
</template>

<script>
import RegisteredArea from '@/components/registered/registeredArea.vue'
export default {
  layout: 'registered',
  name: '',
  data() {
    return {}
  },

  components: {
    RegisteredArea
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss">
.registered-input-info {
  width: 994px;
  height: 500px;
  overflow: hidden;
  box-shadow: 1px 2px 50px #e1e1e1;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 70px;
}
</style>