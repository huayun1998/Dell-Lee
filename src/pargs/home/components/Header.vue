<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>输入城市/游玩/景点
    </div>
    <router-link to="city">
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>    
        </div> 
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'HomeHeader',
    computed: {
        ...mapState(['city'])
    },
}
</script>

 <style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header 
        display flex
        line-height 0.86rem
        background $bgColor
        color #fff
        .header-left
            height 0.64rem
            float left 
            .back-icon 
                text-align center
                font-size .4rem
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            background #fff 
            border-radius .1rem
            color #ccc
        .header-right
            min-width 1rem
            padding 0 .1rem
            float right
            text-align center
            color #ccc
            .arrow-icon
                font-size .24rem
                margin-left -.04rem
</style>
