<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommed :list="recommendList"></home-recommed>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import Vue from 'vue'
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommed from './components/recommed'
import HomeWeekend  from './components/Weekend'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapState } from  'vuex'

Vue.use(VueAxios, axios)

export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  },
  data(){
    return {
      lastCity: '',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },  
  methods:{
    getHomeInfo(){
      this.axios.get('/api/index.json?city=' +this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed: {
    ...mapState(['city'])
  },
}
</script>

<style>
</style>
