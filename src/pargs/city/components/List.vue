<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="buttom-list">
                    <div class="buttom-wrapper">
                        <div class="buttom">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="buttom-list">
                    <div class="buttom-wrapper" 
                    v-for="item of hot" :key="item.id"
                    @click="handleCityClick(item.name)"
                    >
                        <div class="buttom">{{item.name}}</div>
                    </div>
                </div>  
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom" >{{key}}</div>
                <div class="item-list" 
                v-for="innerItem of item" 
                :key=innerItem.id
                :ref="key"
                >
                    <div class="item border-bottom"
                    @click="handleCityClick(innerItem.name)"
                    > {{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: "CityList",
    mounted() {
        this.srcoll = new Bscroll(this.$refs.wrapper)
    },
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    watch: {
        letter(){
            //如果letter发生变化则触发下面这个事件
            if(this.letter){
                //srcoll.scrollToElement传入一个dom元素
                this.srcoll.scrollToElement(this.$refs[this.letter][0])
            }
        }
    },
    methods: {
        handleCityClick(city){
            this.$store.commit('incerment', city)
            this.$router.push('/')
        }
    },
}
</script>

<style lang="stylus" scoped>
.list
    overflow hidden
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0    
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before    
            border-color #ccc
    
    .title  
        line-height .6rem
        background #eeeeee
        padding-left .2rem
        color #666
        font-size .3rem
    .buttom-list   
        padding .2rem .6rem .1rem .1rem
        overflow hidden
        .buttom-wrapper
            float left 
            width 33.33%
            .buttom
                text-align center
                border .02rem solid #ccc
                border-radius .06rem
                padding .1rem 0
                margin .1rem
    .item-list
        line-height .76rem
        padding-left .2rem
</style>