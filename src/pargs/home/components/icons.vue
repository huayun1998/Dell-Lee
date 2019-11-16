<template>
            <div class="icons"> 
                <swiper>
                <swiper-slide  v-for="(page,index) of pages" :key="index">
                    <div class="icon"
                        v-for="item of page" :key="item.id">
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgurl" >
                        </div>
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </swiper-slide>
                </swiper> 
            </div> 
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return {
            iconList: [{
                id:"1",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:'景点门票'
            },
            {
                id:"2",
                imgurl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
                desc:'自然风光'
            },
            {
                id:"3",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:'名胜古迹'
            },
            {
                id:"4",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png",
                desc:'玻璃桥'
            },
            {
                id:"5",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png",
                desc:'天门山公园'
            },
            {
                id:"6",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
                desc:'古北水镇'
            },
            {
                id:"7",
                imgurl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png",
                desc:'欢乐谷万圣节'
            },
            {
                id:"8",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                desc:'赏红叶'
            },
            {
                id:"9",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
                desc:'泡温泉'
            }]
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index/8)   
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            });
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    >>> .swiper-container 
        height 0
        padding-bottom 50%
    .icons 
        overflow hidden
        height 0
        padding-bottom 50%
        .icon
            position relative
            overflow hidden
            float left 
            width 25%
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content 
                    height 100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0     
                text-align center
                line-height .44rem
                color $darkTextColor
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
</style>