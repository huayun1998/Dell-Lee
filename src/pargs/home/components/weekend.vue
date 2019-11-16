<template>
    <div>
        <div class="weekend">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommedList" :key="item.id">
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
    data(){
        return{recommedList:[{
            id:'001',
            imgurl:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title:'故宫',
            desc:'世界五大宫之首，穿越与您近在咫尺'
        },
        {
            id:'002',
            imgurl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title:'故宫',
            desc:'世界五大宫之首，穿越与您近在咫尺'
        },
        {
            id:'003',
            imgurl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title:'故宫',
            desc:'世界五大宫之首，穿越与您近在咫尺'
        },
        {
            id:'004',
            imgurl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title:'故宫',
            desc:'世界五大宫之首，穿越与您近在咫尺'
        },
        ]} 
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