<template>
  <div id="app">
    <my-header></my-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path:'/goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/ratings'}">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/sellers'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/header/header.vue'
export default {
  name: 'App',
  data(){
    return{
      seller:{}
    }
  },
  created(){
    this.$http.get('/api/seller')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  components:{
    MyHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
#app
  .tab
    display:flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,.1))
    .tab-item
      flex: 1
      text-align: center
      &>a
        display:block
        font-size 14px
        color:rgb(77,85,93)
        &.router-link-exact-active
          color:rgb(240,20,20)
</style>
