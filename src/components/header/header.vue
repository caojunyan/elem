<template>
<div class="header">
  <div class="content-wrapper">
    <div class="avatar">
      <img :src="seller.avatar" width="64" height="64" alt="">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
      <div v-if="seller.supports" class="support">
        <div class="icon" :class="classMap[seller.supports[0].type]"></div>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
    <div v-if="seller.supports" class="support-count" @click="showDetail">
      <span class="count">
        {{seller.supports.length}}
      </span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
  <div class="bulletin-wrapper " @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
  </div>
  <div class="background">
    <img :src="seller.avatar" alt="" width="100%" height="134">
  </div>
  <div class="detail" v-show="detailShow">
    <div class="detail-wrapper clearfix">
      <div class="detail-main"></div>
    </div>
    <div class="detail-close">
      <i class="icon-close"></i>
    </div>
  </div>
</div>

</template>

<script>
export default {
    props:{
      seller: {
        type: Object
      }
    },
    data(){
      return{
        detailShow:false
      }
    },
  methods:{
    showDetail(){
      this.detailShow=true
    }
  },
    created(){
      this.classMap=['decrease','discount','guarantee','invoice','special']
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
.header
  color: #ffffff
  background rgba(7,17,27,.5)
  overflow hidden
  .content-wrapper
      padding 24px 12px 18px 24px
      font-size 0
      position relative
      .avatar
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        font-size 14px;
        margin-left 16px;
        .title
          margin:2px 0 8px 0
          .brand
            vertical-align top
            width 30px
            height 18px
            display inline-block
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold


        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
            vertical-align top
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')

          .text
            font-size 12px
            line-height 12px

      .support-count
        position absolute
        right 12px
        bottom 18px
        padding  0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0,0,0,.2)
        text-align: center
        .count
          vertical-align top
          font-size 10px
        .icon-keyboard_arrow_right
          font-size 10px
          line-height 24px
          margin-left 2px



  .bulletin-wrapper
    height 28px
    position relative
    line-height 28px
    padding  0 22px 0 12px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    background rgba(7,17,27,.4)
    .bulletin-title
      display inline-block
      vertical-align top
      margin-top 9px
      width 22px
      height 12px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      font-size 10px
      margin 0 4px
    .icon-keyboard_arrow_right
      position absolute
      font-size 10px
      right 12px
      top:8px

  .background
    position absolute
    top: 0
    left:0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
  .detail
    width 100%
    position fixed
    z-index 100
    height 100%
    overflow auto
    background rgba(7,17,27,.8)
    top 0
    left 0
    .detail-wrapper
      min-height 100%
      .detail-main
        margin-top 64px;
        padding-bottom 64px
     .detail-close
       position relative
       width 32px
       height 32px
       margin -64px auto 0 auto
       clear both
       font-size 32px

</style>
