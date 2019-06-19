<!-- 搜索控件 -->
<template>
  <div class="beer-header-search-comp">
    <div class="beer-header-search-input">
      <el-input
        placeholder="火力全开，满300减40"
        v-model="searchVal"
        clearable>
      </el-input>

      <div class="beer-header-search-button">搜索</div>
    </div>

    <div class="beer-header-search-recom">
      <nuxt-link 
        v-for="(item,idx) in recommend"
        :key="idx"
        :class="idx == (recommend.length - 1) ? 'noline' : ''"
        :to="item.url">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
      searchVal: '',
      recommend: [{
        url: '/',
        id: 0,
        name: '茅台'
      },{
        url: '/',
        id: 1,
        name: '五粮液'
      },{
        url: '/',
        id: 2,
        name: '酒鬼'
      },{
        url: '/',
        id: 3,
        name: '拉菲'
      },{
        url: '/',
        id: 4,
        name: '郎酒'
      },{
        url: '/',
        id: 5,
        name: '黄尾袋鼠'
      },{
        url: '/',
        id: 6,
        name: '水井坊'
      },{
        url: '/',
        id: 7,
        name: '泸州老窖'
      },{
        url: '/',
        id: 8,
        name: '奔富'
      },{
        url: '/',
        id: 9,
        name: '董酒'
      }]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss">
.beer-header-search-comp{
  width: 100%;
  height: 68px;
  .beer-header-search-input{
    height: 38px;
    border: 3px solid #c00;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
      height: 100%;
      flex: 1;
      border: none;
      outline: medium;
      height: 32px;
    }
    .beer-header-search-button{
      width: 85px;
      height: 100%;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      background: #c00;
      cursor: pointer;
    }
  }
  .beer-header-search-recom{
    margin-right: 15px;
    margin-top: 5px;
    a{
      color: #999;
      font-size: 12px;
      padding:0 8px;
      border-right: 1px solid #999;
    }
    a:hover{
      color: #c00;
    }
    .noline{
      border: none;
    }
  }
}
</style>