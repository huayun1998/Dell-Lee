<template>
    <div>
        <div class="banner" 
        @click="handleBanner"
        >
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1902/8e/8e4647b31ef1c9e9a3.img.jpg_600x330_a53bc18b.jpg" 
            >
            <div class="banner-info">
                <div class="banner-title">
                    君澜三亚湾迎宾馆
                </div>
                <div class="banner-number">
                    <div class="iconfont banner-icon">&#xe632;39</div>
                </div>
        </div> 
        </div> 
        <gallary 
        :imgs='imgs'
        v-show="showGallary"
        @close="handleClickGallary"
        ></gallary>
  </div>
 
</template>

<script>
import Gallary from 'common/gallary/Gallaty'
export default {
    name:'DataliBanner',
    components:{
        Gallary
    },
    data() {
        return {
            imgs:['http://img1.qunarzz.com/sight/p0/1902/8e/8e4647b31ef1c9e9a3.img.jpg_r_800x800_edce19f4.jpg'
            ,'http://img1.qunarzz.com/sight/p0/1903/6a/6ac281ef286896a5a3.img.jpg_r_800x800_8b634dfd.jpg'
            ],showGallary:false
        }
    },
    methods: {
        handleBanner(){
            this.showGallary = true
        },
        handleClickGallary(){
            this.showGallary = false
        }
    },
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100% 
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-img linger-gradient(top rgba(0,0,0,0),
            rgb(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height  .32rem
                line-height .32rem
                padding 0 .4rem
                margin-top .14rem
                font-size .24rem
                border-radius .2rem
                background rgb(0,0,0,0.1)
                .banner-icon
                    font-size .24rem
</style>