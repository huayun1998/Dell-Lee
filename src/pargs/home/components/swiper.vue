<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgurl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper'
    ,data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            }
            ,swiperList:[{
                id:'0001',
                imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg'
            },
            {
                id:'0002',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg'
            }  
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    >>> .swiper-pagination-bullet-active
            background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.66% 
        background #ccc
        .swiper-img
            width 100%
</style>