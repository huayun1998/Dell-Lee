<template>
    <div>
        <div class="weekend">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                    <div class="item-img-weekend"> 
                        <img class="item-img" :src="item.imgurl">
                    </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p> 
                    
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommed",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .weekend 
        margin-top 0.2rem
        font-size .32rem
        text-indent .2rem
    .recommend-title 
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-weekend
        overflow hidden
        height 0
        padding-bottom 36.5%  
        margin-top .2rem  
    .item-img
        width 100%
    .item-info
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
             
</style>