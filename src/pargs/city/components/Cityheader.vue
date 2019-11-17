<template>
  
  <div class="header">城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div></router-link>
  </div>
</template>

<script>
export default {    
    name:'cityheader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        position relative
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        .header-back
          left 0
          top 0
          width .64rem
          text-align center
          font-size  .4rem
          position absolute
          color #fff
</style>